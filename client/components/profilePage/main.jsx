import MyLibrary from './myLibrary.jsx';
import MyProfile from './myProfile.jsx';
import React from 'react';

export default function mainProfilePage({ user }) {
  return (
    <div id='profileMain' className="p-5">
      <MyLibrary user={user} />
      <MyProfile user={user} />
    </div>
  );
}
