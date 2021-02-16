import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';

import Schedule from './Schedule.jsx';
import Comments from './Comments.jsx';
import Questionnaire from './Questionnaire.jsx';
import exampleClubs from './exampleData.js';
import ClubBanner from './ClubBanner.jsx';

const BookClubs = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <ClubBanner />
      <h1>BookClubs</h1>
    </div>
  );
};

export default BookClubs;
