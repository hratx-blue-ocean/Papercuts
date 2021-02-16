import MyLibrary from './myLibrary.jsx';
import MyProfile from './myProfile.jsx';
import RecommendedBooks from './recommendedBooks.jsx';
import FriendRecommendations from './friendRecommendations.jsx';
import RecommendedBookClubs from './recommendedBookClubs.jsx';
import React from 'react';
import css from './profileStyles.css';

export default function mainProfilePage () {
  return(
    <div id='profileMain'>
      <MyLibrary />
      <MyProfile />
      <RecommendedBooks />
      <FriendRecommendations />
      <RecommendedBookClubs />
    </div>
  )
}