import React, { useState, useEffect, useLayoutEffect, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import { AppContext } from '../../context/context.jsx';
import BookClubItem from './BookClubItem.jsx';

import 'react-multi-carousel/lib/styles.css';

const ClubsCarousel = ({ deviceType }) => {
  const { clubs, keyword, fuzzyClubs } = useContext(AppContext);
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);

  useEffect(() => {
    if (keyword !== '' && fuzzyClubs.length > 0) {
      let copy = fuzzyClubs.map((club) => club.item);
      let mid = Math.round(copy.length / 2);
      let left = copy.slice(0, mid);
      let right = copy.slice(mid, copy.length - 1);

      setStart([...left]);
      setEnd([...right]);
    } else {
      if (clubs.length > 0) {
        let mid = Math.round(clubs.length / 2);
        let left = clubs.slice(0, mid);
        let right = clubs.slice(mid, clubs.length - 1);

        setStart([...left, ...left, ...right]);
        setEnd([...right, ...left, ...right]);
      }
    }
  }, [clubs, keyword, fuzzyClubs]);
  // console.log('START: ', start, 'END: ', end);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
  };

  function CustomRightArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        aria-label='Go to next slide'
        className='react-multiple-carousel__arrow react-multiple-carousel__arrow--right'
      />
    );
  }

  function CustomLeftArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        aria-label='Go to previous slide'
        className='react-multiple-carousel__arrow react-multiple-carousel__arrow--left'
      />
    );
  }

  function CustomRightArrow2({ onClick }) {
    return (
      <button
        onClick={onClick}
        aria-label='Go to next slide'
        className='right react-multiple-carousel__arrow react-multiple-carousel__arrow--right'
      />
    );
  }

  function CustomLeftArrow2({ onClick }) {
    return (
      <button
        onClick={onClick}
        aria-label='Go to previous slide'
        className='left react-multiple-carousel__arrow react-multiple-carousel__arrow--left'
      />
    );
  }

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className='carousel-button-group'>
        <CustomLeftArrow
          onClick={() => {
            previous();
            document.querySelector('.left').click();
          }}
        />
        <CustomRightArrow
          onClick={() => {
            next();
            document.querySelector('.right').click();
          }}
        />
      </div>
    );
  };

  const ButtonGroup2 = ({ next, previous }) => {
    return (
      <div className='carousel-button-group d-none'>
        <CustomLeftArrow2 onClick={() => previous()} />
        <CustomRightArrow2 onClick={() => next()} />
      </div>
    );
  };

  return (
    <Fragment>
      {start.length > 0 && (
        <Fragment>
          <Carousel
            ssr
            deviceType={deviceType}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            itemClass='container'
            responsive={responsive}
            keyBoardControl={true}
          >
            {start.map((club, index) => (
              <Container className='p-1 m-1'>
                <Link
                  to={`/clubs/detail/${club._id}`}
                  key={club._id + index + `search-${club.score}`}
                >
                  <BookClubItem current={club} placement='bottom' />
                </Link>
              </Container>
            ))}
          </Carousel>
          <Carousel
            ssr
            deviceType={deviceType}
            itemClass='container'
            customLeftArrow={<CustomLeftArrow2 />}
            customRightArrow={<CustomRightArrow2 />}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup2 />}
            responsive={responsive}
            keyBoardControl={true}
          >
            {end.length > 0 &&
              end.map((club, index) => (
                <Container className='p-1 m-1' style={{ width: '100%', height: '100%' }}>
                  <Link
                    to={`/clubs/detail/${club._id}`}
                    key={club._id + index + `search-${club.score}`}
                  >
                    <BookClubItem current={club} placement='top' />
                  </Link>
                </Container>
              ))}
          </Carousel>
        </Fragment>
      )}
      {keyword !== '' && start.length < 1 && (
        <div>
          <h3 className='text-center text-muted pt-2 mt-2'>No Results Found</h3>
        </div>
      )}
    </Fragment>
  );
};

export default ClubsCarousel;
