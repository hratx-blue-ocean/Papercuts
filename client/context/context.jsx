import React, { useState, useEffect, createContext } from 'react';
import Fuse from 'fuse.js';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [book, setBook] = useState({}); //Current selected book (BookDetail modal)
  const [club, setClub] = useState({}); //Current selected club (ClubBanner & BookClub)
  const [clubs, setClubs] = useState([]); //List of all clubs retreived from database
  const [keyword, setKeyword] = useState(''); //Current search input
  const [fuzzyClubs, setFuzzyClubs] = useState([]); //Used to fuzzy-search clubs (fuse.js)
  const [error, setError] = useState(null); //Error toggle if a request returns 400-range errors
  const [loading, setLoading] = useState(false); //Loading toggle to show/hide spinners globally
  const [userClubs, setUserClubs] = useState([]); //List of clubs current user has joined

  useEffect(() => {
    getClubById('602bff381017a68f02009b0e');
    getClubs();
    getUserClubsById([
      '602bff381017a68f02009b0e',
      '602d4e35191ce139634c8791',
      '602d50bc191ce139634c8797',
      '602d52c3191ce139634c879d'
    ]);
  }, []);

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
      setClub({ ...club, members: [...club.members, userId] });
    } catch (err) {
      setError(err.response.data.error);
    }
  }

  // Leave bookclub by id
  async function leaveClubById(id, userId) {
    try {
      await axios.delete(`/bookclub/leave/${id}`, {
        userId
      });
      setClub({
        ...club,
        members: club.members.filter((member) => member !== userId)
      });
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

      setUserClubs(userClubData);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  // Get one book's details from external API
  const getBookDetails = async (isbn) => {
    try {
      let response = await axios.get(`book/details/${isbn}`);
      return response.data;
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  const purchaseBook = async (userId, book) => {
    try {
      await axios
        .post('user/book', {
          userId,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          googleId: book.id,
          image: book.volumeInfo.imageLinks.thumbnail,
          price: book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : null,
          isbn: book.volumeInfo.industryIdentifiers[0].identifier.toString(),
          category: book.volumeInfo.categories
        })
        .then((res) => console.log(res));
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        book,
        club,
        clubs,
        keyword,
        fuzzyClubs,
        error,
        loading,
        userClubs,
        getClubs,
        getClubByName,
        getClubById,
        joinClubById,
        leaveClubById,
        updateKeyword,
        fuzzyClubSearch,
        getUserClubsById,
        getBookDetails,
        purchaseBook
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
