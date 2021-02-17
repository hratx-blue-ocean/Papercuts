import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'react-bootstrap/Image';
import dummyData from './dummyData.js';

const TrendingCaro = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
      // },
      // tablet: {
      //   breakpoint: { max: 1024, min: 464 },
      //   items: 2,
      //   slidesToSlide: 2 // optional, default to 1.
      // },
      // mobile: {
      //   breakpoint: { max: 464, min: 0 },
      //   items: 1,
      //   slidesToSlide: 1 // optional,default to 1.
    },
  };

  return (
    <div>
      Trending Books
      <Carousel
        className='cc-TrendingCaro'
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        arrows={true}
        infinite={true}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-10-px'
      >
        {dummyData.map((book, index) => {
          return (
            <div key={index}>
              <Image style={{ width: 'auto', height: '200px' }} src={book.imageURL} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TrendingCaro;
