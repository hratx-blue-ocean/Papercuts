import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';
import BookClubItem from './BookClubItem.jsx';

const ClubsCarousel = ({ variant }) => {
  const { clubs, keyword, fuzzyClubs } = useContext(AppContext);

  return (
    <Fragment>
      {keyword !== '' && fuzzyClubs.length ? (
        <Carousel pause='hover' variant={variant}>
          <Carousel.Item className='d-flex'>
            {fuzzyClubs.map((club, index) => (
              <Link
                to={`/clubs/detail/${club.item._id}`}
                key={club.item._id + index + `search-${club.score}`}
              >
                <BookClubItem current={club.item} />
              </Link>
            ))}
          </Carousel.Item>
        </Carousel>
      ) : (
        <Fragment>
          {keyword === '' ? (
            <Carousel pause='hover' variant={variant}>
              <Carousel.Item className='d-flex'>
                {clubs.map((club, index) => (
                  <BookClubItem
                    key={club ? club._id + index : club.item._id + index}
                    current={club ? club : club.item}
                  />
                ))}
              </Carousel.Item>
            </Carousel>
          ) : (
            <div>
              <h3 className='text-center text-muted pt-2 mt-2'>
                No Results Found
              </h3>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

ClubsCarousel.defaultProps = {
  variant: 'light'
};

export default ClubsCarousel;
