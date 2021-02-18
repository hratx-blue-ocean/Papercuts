import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/context.jsx';
import { AuthContext } from '../../context/authContext.jsx';
import { Card, Col, Row, Tab, Tabs } from 'react-bootstrap';
import './profileStyles.css';

export default function UserBookClubs({user = {bookclubs: []}}) {

  const { getUserClubsById, userClubs } = useContext(AppContext);
  const [clubIds, setClubIds] = useState([]);

  return (
    <>
      <div className='userClubsHeader'>User's Book Clubs</div>
      <div className='userBookClubsBody'>
          {userClubs.map(club => {
            var cardImage = {
              backgroundImage: `url(${club.smallThumbnail})`,
            }
            return (
              <div className='usedBookClubInnersBody' key={club.name}>
                <Card className='userBookClubItem cardStyle' style={cardImage}>
                  {club.name}
                </Card>
              </div>
            )
          })
        }
      </div>
    </>
  )
}