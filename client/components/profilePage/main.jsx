import MyLibrary from './myLibrary.jsx';
import MyProfile from './myProfile.jsx';
import RecommendedBooks from './recommendedBooks.jsx';
import FriendRecommendations from './friendRecommendations.jsx';
import UserBookClubs from './userBookClubs.jsx';
import React from 'react';
import css from './profileStyles.css';

export default function MainProfilePage () {
  return(
    <div id='profileMain'>
      <MyLibrary />
      <MyProfile />
      <RecommendedBooks />
      <FriendRecommendations />
      <UserBookClubs />
    </div>
  )
}