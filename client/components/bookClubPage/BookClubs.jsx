import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../../context/context.jsx';
import { Container } from 'react-bootstrap';

import ClubBanner from './ClubBanner.jsx';
import ClubsCarousel from './ClubsCarousel.jsx';
import SearchBookClubs from './SearchBookClubs.jsx';
import Error from '../global/Error.jsx';

const BookClubs = () => {
  const { club, error } = useContext(AppContext);
  const [searching, setSearching] = useState(false);
  const [found, setFound] = useState(false);

  useEffect(() => {
    console.log(found);
    console.log(searching);
  }, [found, searching]);

  return (
    <div className='p-0 m-0'>
      <Container className='px-1 mt-1'>
        <SearchBookClubs setSearching={setSearching} setFound={setFound} />
      </Container>
      {searching ? (
        <Container className='px-1 py-1 my-1' style={{ maxWidth: '90vw' }}>
          <ClubsCarousel searching />
        </Container>
      ) : (
        <Fragment>
          {error ? (
            <Error />
          ) : found ? (
            <Redirect to={`/clubs/detail/${club._id}`} />
          ) : (
            <Fragment>
              <Container className='py-1 my-1' style={{ maxWidth: '90vw' }}>
                <ClubBanner main />
              </Container>
              <Container
                className='px-1 py-1 my-1'
                style={{ maxWidth: '90vw' }}
              >
                <ClubsCarousel />
              </Container>
            </Fragment>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default BookClubs;
