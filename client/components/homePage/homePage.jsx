import React, { useContext } from 'react';
import BOTM from './BOTM.jsx';
import TrendingCaro from './TrendingCaro.jsx';
import GenreCaro from './GenreCaro.jsx';
import SiteDesc from './SiteDesc.jsx';
import LogInSignUp from './LogInSignUp.jsx';
import MonthlySubscr from './MonthlySubscr.jsx';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

/* NYT Books API:
  instructions in the google doc
  get at least 15 books (the whole list)
  gives us the ISBN (10 or 13) - which we can then use to query the Google Books API (either one works at Google, just make them match).
  split by genres, super detailed
  Price may be zero if the book hasn't come out yet;
*/

/* Google Books API:
  Request sepcific book at Google (also in the instructions)
  Gets category (more broad than genre), thumbnails, there's ratings, description, author, publisher.
  There's price, but:
*/

const HomePage = (props) => {
  /// stuff I need from context gets listed like this:
  /* const { stuff ] = useContext(WhichOneFromContext)} */

  /// get book of the month:
    // image, title, author, prices for HC, PB, AB, description

  /// get trending books:
    // thumbnail image, title, author, price, description?

  /// get genres
    // thumbnail image, title, author, price, description? (seems like a lot for these hovers...)

  return (
///////////  OPTION 1:  FLEX EVERYTHING:
    <div>
      <Container className="cc-homePage-topLevelContainer">
        <div className="cc-homePage-leftMainCol">
          <BOTM />
          <TrendingCaro />
          <GenreCaro />
        </div>
        <div className="cc-homePage-rightMainCol">
          <SiteDesc />
          {/* <LogInSignUp /> */}
          <MonthlySubscr />
        </div>
      </Container>
    </div>
  )
}

export default HomePage;

