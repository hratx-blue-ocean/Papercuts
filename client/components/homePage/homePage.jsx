import React, { useEffect, useContext } from 'react';
import Bookofthemonth from './bookofthemonth.jsx';
import Books from './books.jsx';
import SiteDesc from './SiteDesc.jsx';
import MonthlySubscr from './MonthlySubscr.jsx';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className='p-1 m-1'>
      <Container>
        <Bookofthemonth />
        <Books />
        <br />
      </Container>
    </Container>
  );
};

export default HomePage;
