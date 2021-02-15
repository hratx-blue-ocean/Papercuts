import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';

const Carousel = () => {
  useEffect(() => {}, []);

  return (
    <Carousel pause='hover' className='bg-dark'>
      {books.map((book) => (
        <Carousel.Item key={book._id}>
          <Link to={`/book/${book._id}`}>
            <Image src={book.image} alt={book.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {book.name} (${book.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carousel;
