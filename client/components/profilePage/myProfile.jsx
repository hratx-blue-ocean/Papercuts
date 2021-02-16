import React, {useState} from 'react';
import axios from 'axios';

export default function myFriends() {
  const userFriends = [{username: 'Josh'},{username: 'Maddy'}, {username: 'Spencer'},{username: 'Abe'},{username: 'Jeffrey'}]

  return(
    <div>
      <div>Friends</div>
      <div><a>Find Friends</a><a>View All Friends</a></div>
      <div>
        {
        userFriends.map((friend) => {
          return <span>{friend.username}</span>
        })
        }
      </div>
    </div>
  )

}