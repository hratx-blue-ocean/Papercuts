import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';

import ClubBanner from './ClubBanner.jsx';
import ClubsCarousel from './ClubsCarousel.jsx';
import SearchBookClubs from './SearchBookClubs.jsx';

const BookClubs = () => {
  useEffect(() => {}, []);

  return (
    <div className='p-0 m-0'>
      <Container className='px-1 mt-1'>
        <SearchBookClubs />
      </Container>
      <Container className='py-1 my-1' style={{ maxWidth: '90vw' }}>
        <ClubBanner />
      </Container>
      <Container className='px-1 py-1 my-1' style={{ maxWidth: '90vw' }}>
        <h5 className='pl-1 ml-1 text-dark'>Category - Science Fiction</h5>
        <ClubsCarousel />
      </Container>
      <Container className='px-1 py-1 my-1' style={{ maxWidth: '90vw' }}>
        <h5 className='pl-1 ml-1 text-dark'>Category - Space Horror</h5>
        <ClubsCarousel />
      </Container>
    </div>
  );
};

export default BookClubs;
