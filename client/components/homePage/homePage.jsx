import React, { useEffect, useContext } from 'react';
import Bookofthemonth from './bookofthemonth.jsx';
import TrendingCaro from './TrendingCaro.jsx';
import GenreCaro from './GenreCaro.jsx';
import SiteDesc from './SiteDesc.jsx';
import MonthlySubscr from './MonthlySubscr.jsx';
import Container from 'react-bootstrap/Container';
import {AppContext} from '../../context/context.jsx'

const HomePage = (props) => {

  return (
    <div>
      <Container className="cc-homePage-topLevelContainer">
        <div className="cc-homePage-leftMainCol">
          <Bookofthemonth />
          <TrendingCaro />
          <GenreCaro />
        </div>
        <div className="cc-homePage-rightMainCol">
          <SiteDesc />
          <MonthlySubscr />
        </div>
      </Container>
    </div>
  )
}

export default HomePage;

