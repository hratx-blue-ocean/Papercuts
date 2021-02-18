import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import image1 from './avatar1.png';
import FriendRecommendations from './friendRecommendations.jsx';
import UserBookClubs from './userBookClubs.jsx';
import AllUsersModal from './allUsersModal.jsx';
import AllFriendsModal from './allFriendsModal.jsx';
import { Button, ListGroup, Container } from 'react-bootstrap';
import AuthContext from '../../context/authContext.jsx';

export default function myFriends({user = {friends:[]}}) {
  const currentUser = {
    username: 'bookwormboy85',
    friends: [{username: 'Josh'},{username: 'Maddy'}, {username: 'Spencer'},{username: 'Abe'},{username: 'Jeffrey'}],
    subscription: 'platinum subscription'
  }
  const [allUsersShow, setAllUsersShow] = useState(false);
  const [allFriendsShow, setAllFriendsShow] = useState(false);
  const [friendsList, setFriendsList] = useState([]);

  useEffect(()=>{
    axios.post('/user/friends', {userId : user._id})
    .then ((friends) => {
      setFriendsList(friends.data);
    })
  },[])

  return(
    <div id='myProfile'>
      <div id='userHeader'>
        <div>{user.username}</div>
        <div>{currentUser.subscription}</div>
      </div>
      <div id='friendsLinks'>
        <a>Friends</a>
        <a variant='primary' onClick={() => { setAllUsersShow(true) }}>Find Friends</a>
        <AllUsersModal handleClose={() => { setAllUsersShow(false) }} show={allUsersShow} user={user} />
        <a variant='primary' onClick={() => { setAllFriendsShow(true) }}>View All Friends</a>
        <AllFriendsModal handleClose={() => { setAllFriendsShow(false) }} show={allFriendsShow} friendsList={friendsList}/>
      </div>
      <div id='myFriends'>
        {friendsList.length > 0 &&
          friendsList.map((friend) => {
            return(
              <div className = 'friendsDiv' key = {friend.username}>
                <div className = 'friendsBody'><img className='friendsImage' src={friend.photoUrl}></img></div>
                <div>{friend.username}</div>
              </div>
            )
          })
        }
      </div>
      <FriendRecommendations friendsList = {friendsList}/>
      <UserBookClubs user = {user}/>
    </div>
  )

}