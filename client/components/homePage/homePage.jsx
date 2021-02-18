import React, { useContext } from 'react';
import BOTM from './BOTM.jsx';
import TrendingCaro from './TrendingCaro.jsx';
import GenreCaro from './GenreCaro.jsx';
import SiteDesc from './SiteDesc.jsx';
import MonthlySubscr from './MonthlySubscr.jsx';
import Container from 'react-bootstrap/Container';

const HomePage = () => {

  return (

    <div className="cc-homePage-topLevelContainer">
      <div className="cc-homePage-topHalf">
        <div className="cc-homePage-leftMainCol">
          <BOTM />
        </div>
        <div className="cc-homePage-rightMainCol">
        <SiteDesc />
        <MonthlySubscr />
        </div>
      </div>
      <div className="cc-homepage-bottomHalf">
        <TrendingCaro />
        <GenreCaro />
      </div>
    </div>

  )
}

export default HomePage;

