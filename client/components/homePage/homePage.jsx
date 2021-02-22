import React, { useEffect, useContext } from 'react';
import Bookofthemonth from './bookofthemonth.jsx';
import Books from './books.jsx';
import SiteDesc from './SiteDesc.jsx';
import MonthlySubscr from './MonthlySubscr.jsx';
import Container from 'react-bootstrap/Container';

const HomePage = () => {
  return (
    <>
      <Container>
        <Bookofthemonth />
      </Container>
      <Books />
      <br />
    </>
  );
};

export default HomePage;
