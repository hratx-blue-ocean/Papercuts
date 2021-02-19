import React, { useState } from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import '../../../node_modules/react-multi-carousel/lib/styles.css';
import './profileStyles.css';
import BookDetail from '../global/BookDetail.jsx';

export default function RecommendedBooks() {
  const books = [];
  const [clickedBook, setClickedBook] = useState();
  const [show, setShow] = useState(false);
  let dummyBooks = [
    'http://books.google.com/books/content?id=xUNEAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    'http://books.google.com/books/content?id=IV5HDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    'http://books.google.com/books/content?id=qzzLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    'http://books.google.com/books/content?id=dhkSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    'http://books.google.com/books/content?id=gI2RDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    'http://books.google.com/books/content?id=zocZAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  ];

  return (
    <>
      <h3>Recommended Books</h3>
      <div id='recommendBody'>
        {dummyBooks.map((book, index) => {
          return (
            <div className='bookBody' key={index}>
              <img
                className='bookImage'
                variant='primary'
                onClick={() => {
                  setClickedBook(book);
                  setShow(true);
                }}
                src={book}
              ></img>
              <BookDetail
                handleClose={() => {
                  setShow(false);
                }}
                show={show}
                book={clickedBook}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
