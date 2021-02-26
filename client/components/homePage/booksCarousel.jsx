import React from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const BookCarousel = ({ books, setPhoto, setModalBook, setShow }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 1
    }
  };
  return (
    <div className='p-3' style={{width: '95vw'}}>
      <Carousel
        swipeable
        draggable={false}
        showDots={false}
        responsive={responsive}
        arrows={true}
        infinite={false}
        keyBoardControl
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-10-px'
      >
        {books.map((book) => {
          return (
            <div key={book.primary_isbn10}>
              <Image
                style={{ width: 'auto', height: '280px' }}
                src={book.book_image}
                onClick={() => {
                  setModalBook(book.primary_isbn10);
                  setPhoto(book.book_image);
                  setShow(true);
                }}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default BookCarousel;
