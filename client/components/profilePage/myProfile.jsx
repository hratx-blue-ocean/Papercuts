import React, {useState, useContext} from 'react';
import axios from 'axios';
import image1 from './avatar1.png';
import FriendRecommendations from './friendRecommendations.jsx';
import RecommendedBookClubs from './recommendedBookClubs.jsx';
import AllUsersModal from './allUsersModal.jsx';
import { Button, ListGroup, Container } from 'react-bootstrap';
import AuthContext from '../../context/authContext.jsx';

export default function myFriends({user}) {
  const currentUser = {
    username: 'bookwormboy85',
    friends: [{username: 'Josh'},{username: 'Maddy'}, {username: 'Spencer'},{username: 'Abe'},{username: 'Jeffrey'}],
    subscription: 'platinum subscription'
  }
  console.log(user)
  const [show, setShow] = useState(false);

  return(
    <div id='myProfile'>
      <div id='userHeader'>
        <div>{currentUser.username}</div>
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
        currentUser.friends.map((friend) => {
          return (
            <div className = 'friendsDiv' >
              <div><img src={image1}></img></div>
              <div>{friend.username}</div>
            </div>
          )
        })
        }
      </div>
      <FriendRecommendations/>
      <RecommendedBookClubs user = {user}/>

    </div>
  )

}