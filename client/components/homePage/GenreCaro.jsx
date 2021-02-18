import React, { useContext, useState, useEffect } from 'react';
import { Image, Dropdown } from 'react-bootstrap';
import BookDetail from '../global/BookDetail.jsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import dummyData from './dummyData.js';

const GenreCaro = () => {
  const [show, setShow] = useState(false);
  const [modalBook, setModalBook] = useState(undefined);
  const handleShow = () => setShow(true);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
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
    }
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
          Select Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Childrens Fiction</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Horror</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Winter Survival</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Carousel
        className='cc-GenreCaro'
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
            <div key={book.isbn10}>
              <Image
                style={{ width: 'auto', height: '200px' }}
                src={book.imageURL}
                onClick={() => {
                  setShow(true);
                  setModalBook(book);
                }}
              />
            </div>
          );
        })}
      </Carousel>
      <BookDetail
        handleClose={() => {
          setShow(false);
        }}
        show={show}
      />
    </div>
  );
};
export default GenreCaro;
