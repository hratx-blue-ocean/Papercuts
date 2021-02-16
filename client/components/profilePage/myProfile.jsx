import React, {useState} from 'react';
import axios from 'axios';
import image1 from './avatar1.png';

export default function myFriends() {
  const user = {
    username: 'bookwormboy85',
    friends: [{username: 'Josh'},{username: 'Maddy'}, {username: 'Spencer'},{username: 'Abe'},{username: 'Jeffrey'}],
    subscription: 'platinum subscription'
  }

  return(
    <div id='myProfile'>
      <div>{user.username}</div>
      <div>{user.subscription}</div>
      <div>Friends</div>
      <div><a>Find Friends</a><a>View All Friends</a></div>
      <div>
        {
        user.friends.map((friend) => {
          return (
            <span>
              <div><img src={image1}></img></div>
              <div>{friend.username}</div>
            </span>
          )
        })
        }
      </div>
    </div>
  )

}