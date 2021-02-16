import React from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import '../../../node_modules/react-multi-carousel/lib/styles.css';
import './styles.css';

export default function RecommendedBooks() {
  const books = [];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1500, min: 700 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="recommendedBooksContainer">
      <h1>Recommended Books</h1>
      <Carousel className="recommendedCarousel"
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        renderButtonGroupOutside={true}
        keyboard={true}
      >
        <img src="http://books.google.com/books/content?id=xUNEAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" />
        <img src="http://books.google.com/books/content?id=IV5HDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
        <img src="http://books.google.com/books/content?id=qzzLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
        <img src="http://books.google.com/books/content?id=LiA9zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" />
        <img src="http://books.google.com/books/content?id=zocZAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" />
      </Carousel>
    </div>
  )
}