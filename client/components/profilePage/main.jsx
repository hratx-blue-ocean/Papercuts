import MyLibrary from './myLibrary.jsx';
import MyProfile from './myProfile.jsx';
import React, { useContext } from 'react';
import css from './profileStyles.css';
import { AuthContext } from '../../context/authContext.jsx';

export default function mainProfilePage({ user }) {
  return (
    <div id='profileMain'>
      <MyLibrary user={user} />
      <MyProfile user={user} />
    </div>
  );
}
