import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import BookClubItem from './BookClubItem.jsx';
import exampleClubs from './exampleData.js';

const ClubsCarousel = ({ variant, category }) => {
  let [clubs, setClubs] = useState(exampleClubs);
  let [topic, setTopic] = useState(category);
  useEffect(() => {}, []);

  return (
    <Carousel pause='hover' variant={variant}>
      <Carousel.Item className='d-flex'>
        {clubs.map((club) => (
          <BookClubItem
            key={club.id}
            id={club.id}
            title={club.name}
            desc={club.description}
            splash={`../../assets/images/bookclubs_sample/bookclub_${club.id}.svg`}
          />
        ))}
      </Carousel.Item>
    </Carousel>
  );
};

ClubsCarousel.defaultProps = {
  variant: 'light',
  category: null,
};

export default ClubsCarousel;
