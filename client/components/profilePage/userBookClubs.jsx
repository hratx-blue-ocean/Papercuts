import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/context.jsx';
import { AuthContext } from '../../context/authContext.jsx';
import { Card, Col, Row, Tab, Tabs } from 'react-bootstrap';
import './profileStyles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function UserBookClubs({ user = { bookclubs: [] } }) {
  const usrId = JSON.parse(localStorage.getItem('usrID')) || '';

  const [clubs, setClubs] = useState([]);
  useEffect(async () => {
    const result = await axios.post('/user/bookclubs', {
      userId: usrId
    });
    setClubs(result.data);
  }, []);

  return (
    <>
      <div style={{ fontSize: '23px' }} className='userClubsHeader font-weight-bold'>
        My Book Clubs
      </div>
      <div className='userBookClubsBody'>
        {clubs &&
          clubs.map((club, index) => {
            var cardImage = {
              backgroundImage: `url(${club.smallThumbnail})`
            };
            return (
              <div className='usedBookClubInnersBody' key={index}>
                <Link to={`/clubs/detail/${club._id}`}>
                  <Card className='userBookClubItem cardStyle' style={cardImage}>
                    {club.name}
                  </Card>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}
