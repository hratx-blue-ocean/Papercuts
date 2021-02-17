import React, {useState, useContext} from 'react';
import axios from 'axios';
import image1 from './avatar1.png';
import FriendRecommendations from './friendRecommendations.jsx';
import UserBookClubs from './userBookClubs.jsx';
import AllUsersModal from './allUsersModal.jsx';
import { Button, ListGroup, Container } from 'react-bootstrap';
import AuthContext from '../../context/authContext.jsx';

export default function myFriends({user}) {
  const currentUser = {
    username: 'bookwormboy85',
    friends: [{username: 'Josh'},{username: 'Maddy'}, {username: 'Spencer'},{username: 'Abe'},{username: 'Jeffrey'}],
    subscription: 'platinum subscription'
  }
  const [show, setShow] = useState(false);
  console.log(user);

  return(
    <div id='myProfile'>
      <div id='userHeader'>
        <div>{user.username}</div>
        <div>{currentUser.subscription}</div>
      </div>
      <div id='friendsLinks'>
        <a>Friends</a>
        <a variant='primary' onClick={() => { setShow(true) }}>Find Friends</a>
        <AllUsersModal handleClose={() => { setShow(false) }} show={show} />
        <a>View All Friends</a>
      </div>
      <div id='myFriends'>
        {
        user.friends.map((friend) => {

          return (
            <div className = 'friendsDiv' key = {friend.username}>
              <div><img src={image1}></img></div>
              <div>{friend.username}</div>
            </div>
          )
        })
        }
      </div>
      <FriendRecommendations user = {user}/>
      <UserBookClubs user = {user}/>

    </div>
  )

}