import MyLibrary from './myLibrary.jsx';
import MyProfile from './myProfile.jsx';
import React from 'react';
import css from './profileStyles.css';

export default function mainProfilePage () {
  return(
    <div id='profileMain'>
      <MyLibrary />
      <MyProfile />
    </div>
  )
}