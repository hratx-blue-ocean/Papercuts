import React, { useState, useEffect, useReducer, createContext } from 'react';
import axios from 'axios';

let initState = {
  book: {},
  club: {},
  event: {},
  questionnaire: {},
  users: [],
  books: [],
  clubs: [],
  events: [],
  questionnaires: [],
  categories: [],
  error: null,
  success: false,
  loading: false,
  dispatch: (action) => this.setState((state) => reducer(state, action))
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_BOOKCLUB':
      return {
        ...state,
        club: action.payload,
        success: true
      };
    case 'GET_BOOKCLUBS':
      return {
        ...state,
        clubs: [...state.clubs, action.payload],
        success: true
      };
    case 'JOIN_BOOKCLUB':
      return {
        ...state,
        members: [...state.members, action.payload],
        success: true
      };
    case 'LEAVE_BOOKCLUB':
      return {
        ...state,
        members: state.members.filter((member) => member !== action.payload),
        success: true
      };
    case 'SEARCH_BOOKCLUB':
      return {
        ...state,
        club: action.payload,
        success: true
      };
    case 'SEARCH_ERROR':
      return {
        ...state,
        error: action.payload,
        success: false
      };
    default:
      return state;
  }
};

export const AppContext = createContext(initState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [selectedClubData, setSelectedClubData] = useState({});

  useEffect(() => {
    getClubById('602bff381017a68f02009b0e');
    getClubs();
  }, []);

  // Actions
  // Get all bookclubs
  async function getClubs() {
    try {
      const res = await axios.get('/bookclub/all');

      dispatch({
        type: 'GET_BOOKCLUBS',
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: 'SEARCH_ERROR',
        payload: err.response.data.error
      });
    }
  }

  // Get single bookclub by name
  async function getClubByName(name) {
    try {
      const res = await axios.get(`/`, { name });

      dispatch({
        type: 'GET_BOOKCLUB',
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: 'SEARCH_ERROR',
        payload: err.response.data.error
      });
    }
  }

  // Get single bookclub by id
  async function getClubById(id) {
    try {
      const res = await axios.get(`/bookclub/${id}`);

      dispatch({
        type: 'SEARCH_BOOKCLUB',
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: 'SEARCH_ERROR',
        payload: err.response.data.error
      });
    }
  }

  // Join bookclub by id
  async function joinClubById(id, userId) {
    try {
      const res = await axios.post(`/bookclub/join/${id}`, {
        userId
      });

      dispatch({
        type: 'JOIN_BOOKCLUB',
        payload: user._id
      });
    } catch (err) {
      dispatch({
        type: 'SEARCH_ERROR',
        payload: err.response.data.error
      });
    }
  }

  // Leave bookclub by id
  async function leaveClubById(id, userId) {
    try {
      const res = await axios.post(`/bookclub/join/${id}`, {
        userId
      });

      dispatch({
        type: 'LEAVE_BOOKCLUB',
        payload: user._id
      });
    } catch (err) {
      dispatch({
        type: 'SEARCH_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (
    <AppContext.Provider
      value={{
        club: state.club,
        clubs: state.clubs,
        error: state.error,
        loading: state.loading,
        getClubs,
        getClubByName,
        getClubById,
        joinClubById,
        leaveClubById
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
