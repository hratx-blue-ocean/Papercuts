import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import image1 from './avatar1.png';
import FriendRecommendations from './friendRecommendations.jsx';
import UserBookClubs from './userBookClubs.jsx';
import AllUsersModal from './allUsersModal.jsx';
import AllFriendsModal from './allFriendsModal.jsx';
import { Button, ListGroup, Container, Badge, Row, Col } from 'react-bootstrap';
import AuthContext from '../../context/authContext.jsx';

export default function myFriends({ user = { friends: [] } }) {
  const currentUser = {
    username: 'bookwormboy85',
    friends: [
      { username: 'Josh' },
      { username: 'Maddy' },
      { username: 'Spencer' },
      { username: 'Abe' },
      { username: 'Jeffrey' }
    ],
    subscription: 'platinum subscription'
  };
  const [allUsersShow, setAllUsersShow] = useState(false);
  const [allFriendsShow, setAllFriendsShow] = useState(false);
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    const usrId = JSON.parse(localStorage.getItem('usrID')) || '';

    axios.post('/user/friends', { userId: usrId }).then((friends) => {
      setFriendsList(friends.data);
    });
  }, []);

  return (
    <div id='myProfile'>
      <div id='userHeader'>
        <h4>{user.username}</h4>
        {user.subscriptionTier && (
          <div className='btn btn-outline-secondary'>
            {user.subscriptionTier}
          </div>
        )}
      </div>
      <br />
      <br />
      <Row>
        <Col xs={5}>
          <h4>Friends</h4>
        </Col>
        <Col>
          <a
            variant='primary'
            onClick={() => {
              setAllUsersShow(true);
            }}
          >
            Find Friends
          </a>{' '}
          &gt;
        </Col>
        <Col>
          <a
            variant='primary'
            onClick={() => {
              setAllFriendsShow(true);
            }}
          >
            View All Friends
          </a>{' '}
          &gt;
        </Col>
      </Row>
      <div id='myFriends'>
        {friendsList.length > 0 &&
          friendsList.map((friend) => {
            return (
              <div className='friendsDiv' key={friend.username}>
                <div className='friendsBody'>
                  <img className='friendsImage' src={friend.photoUrl}></img>
                </div>
                <div>{friend.username}</div>
              </div>
            );
          })}
      </div>
      <br /> <br />
      <FriendRecommendations friendsList={friendsList} />
      <br /> <br />
      <UserBookClubs user={user} />
      {/* Modals */}
      <AllUsersModal
        handleClose={() => {
          setAllUsersShow(false);
        }}
        show={allUsersShow}
        user={user}
      />
      <AllFriendsModal
        handleClose={() => {
          setAllFriendsShow(false);
        }}
        show={allFriendsShow}
        friendsList={friendsList}
      />
    </div>
  );
}
