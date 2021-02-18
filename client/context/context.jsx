import React, { useState, useEffect, createContext } from 'react';
import Fuse from 'fuse.js';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [book, setBook] = useState({});
  const [club, setClub] = useState({});
  const [event, setEvent] = useState({});
  const [questionnaire, setQuestionnaire] = useState({});
  const [users, setUsers] = useState([]);
  const [members, setMembers] = useState([]);
  const [books, setBooks] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [events, setEvents] = useState([]);
  const [questionnaires, setQuestionnaires] = useState([]);
  const [categories, setCategories] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [fuzzyClubs, setFuzzyClubs] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userClubs, setUserClubs] = useState([]);
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [trendingGenres, setTrendingGenres] = useState([]);

  useEffect(() => {
    getClubById('602bff381017a68f02009b0e');
    getClubs();
    getUserClubsById(['602bff381017a68f02009b0e', '602d4e35191ce139634c8791', '602d50bc191ce139634c8797', '602d52c3191ce139634c879d'])
  }, []);

  // useEffect(() => {
  //   getUserClubsById(['602bff381017a68f02009b0e', '602d4e35191ce139634c8791', '602d50bc191ce139634c8797', '602d52c3191ce139634c879d'])
  //   getUserClubsById('602bff381017a68f02009b0e')
  // }, [])

  // Actions
  // Get all bookclubs
  async function getClubs() {
    try {
      const res = await axios.get('/bookclub/all');

      setClubs([...res.data]);
    } catch (err) {
      setError(err.response.data.error);
    }
  }

  // Get single bookclub by name
  async function getClubByName(name) {
    try {
      const res = await axios.get(`/`, { name });

      setClub(res.data);
    } catch (err) {
      setError(err.response.data.error);
    }
  }

  // Get single bookclub by id
  async function getClubById(id) {
    try {
      const res = await axios.get(`/bookclub/${id}`);

      setClub(res.data);
    } catch (err) {
      setError(err.response.data.error);
    }
  }

  // Join bookclub by id
  async function joinClubById(id, userId) {
    try {
      await axios.post(`/bookclub/join/${id}`, {
        userId
      });

      setMembers([...members, user._id]);
    } catch (err) {
      setError(err.response.data.error);
    }
  }

  // Leave bookclub by id
  async function leaveClubById(id, userId) {
    try {
      await axios.post(`/bookclub/join/${id}`, {
        userId
      });

      setMembers([...members.filter((member) => member !== user._id)]);
    } catch (err) {
      setError(err.response.data.error);
    }
  }

  // Leave bookclub by id
  function updateKeyword(string) {
    try {
      setKeyword(string);
    } catch (err) {
      setError(err.response.data.error);
    }
  }

  // Leave bookclub by id
  function fuzzyClubSearch(string, clubs) {
    // Search Options
    const options = {
      includeScore: true,
      keys: ['name']
    };
    // Create Fuse index
    const index = Fuse.createIndex(options.keys, clubs);
    // initialize Fuse with the index
    const fuse = new Fuse(clubs, options, index);
    const result = fuse.search(string);
    // result.sort((a, b) => a.score > b.score);

    try {
      setFuzzyClubs(result);
    } catch (err) {
      setError(err.response.data.error);
    }
  }

  // Get user book club by id
  const getUserClubsById = async (ids) => {
    const userClubData = [];
    try {
      ids.map(async (clubId) => {
        const clubData = await axios.get(`user/userclubs/${clubId}`);
        userClubData.push(clubData.data);
      });

      // const clubData = await axios.get(`user/userclubs/${ids}`);
      setUserClubs(userClubData);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  // Get top books from select NYT Best Sellers lists
  async function getTrendingBooks(lists) => {
    const topBooks = [];
    try {
      lists.map(async (list) => {
        const listTop = await axios.get(`user/`)
      })
    }
  }

  return (
    <AppContext.Provider
      value={{
        book,
        club,
        event,
        questionnaire,
        users,
        members,
        books,
        clubs,
        events,
        questionnaires,
        categories,
        keyword,
        fuzzyClubs,
        error,
        success,
        loading,
        userClubs,
        getClubs,
        getClubByName,
        getClubById,
        joinClubById,
        leaveClubById,
        updateKeyword,
        fuzzyClubSearch,
        getUserClubsById
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
