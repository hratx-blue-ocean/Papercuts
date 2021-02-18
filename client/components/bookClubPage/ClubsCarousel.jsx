import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AppContext } from '../../context/context.jsx';
import BookClubItem from './BookClubItem.jsx';

import 'react-multi-carousel/lib/styles.css';

const ClubsCarousel = ({ variant, deviceType }) => {
  const { clubs, keyword, fuzzyClubs } = useContext(AppContext);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <Fragment>
      {keyword !== '' && fuzzyClubs.length ? (
        <Carousel ssr deviceType={deviceType} itemClass='container' responsive={responsive}>
          {fuzzyClubs.map((club, index) => (
            <Link
              to={`/clubs/detail/${club.item._id}`}
              key={club.item._id + index + `search-${club.score}`}
            >
              <BookClubItem current={club.item} />
            </Link>
          ))}
        </Carousel>
      ) : (
        <Fragment>
          <Carousel ssr deviceType={deviceType} itemClass='container' responsive={responsive}>
            {clubs.map((club, index) => (
              <BookClubItem
                key={club ? club._id + index : club.item._id + index}
                current={club ? club : club.item}
              />
            ))}
          </Carousel>
          {keyword !== '' && (
            <div>
              <h3 className='text-center text-muted pt-2 mt-2'>No Results Found</h3>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

ClubsCarousel.defaultProps = {
  variant: 'light',
  deviceType: 'desktop'
};

export default ClubsCarousel;
