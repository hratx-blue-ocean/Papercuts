import MyLibrary from './myLibrary.jsx';
import MyProfile from './myProfile.jsx';
import React from 'React';
import css from './profileStyles.css';

export default function mainProfilePage ({user}) {
  return(
    <div id='profileMain'>
      <MyLibrary user = {user}/>
      <MyProfile user = {user}/>
    </div>
  )
}