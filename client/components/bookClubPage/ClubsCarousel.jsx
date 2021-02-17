import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';
import BookClubItem from './BookClubItem.jsx';

const ClubsCarousel = ({ variant, searching }) => {
  const { clubs } = useContext(AppContext);

  return (
    <Carousel pause='hover' variant={variant}>
      <Carousel.Item className='d-flex'>
        {clubs.map((club) => (
          <Fragment>
            {searching ? (
              <Link to={`/clubs/detail/${club._id}`}>
                <BookClubItem key={club._id} current={club} />
              </Link>
            ) : (
              <BookClubItem key={club._id} current={club} />
            )}
          </Fragment>
        ))}
      </Carousel.Item>
    </Carousel>
  );
};

ClubsCarousel.defaultProps = {
  variant: 'light',
  searching: false
};

export default ClubsCarousel;
