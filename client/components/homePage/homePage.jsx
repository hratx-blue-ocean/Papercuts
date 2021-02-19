import React, { useEffect, useContext } from 'react';
import Bookofthemonth from './bookofthemonth.jsx';
import Books from './books.jsx';
import SiteDesc from './SiteDesc.jsx';
import MonthlySubscr from './MonthlySubscr.jsx';
import Container from 'react-bootstrap/Container';

const HomePage = () => {

  return (
    <div>
      <Container className="cc-homePage-topLevelContainer">
        <div className="cc-homePage-leftMainCol">
          <Bookofthemonth />
         
        </div>
        <div className="cc-homePage-rightMainCol">
          <SiteDesc />
          <MonthlySubscr />
        </div>
      </Container>
      <Books />
      <br />
    </div>
  )
}

export default HomePage;

