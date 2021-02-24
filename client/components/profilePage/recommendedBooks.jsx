import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import '../../../node_modules/react-multi-carousel/lib/styles.css';
import './profileStyles.css';
import BookDetail from '../global/BookDetail.jsx';
import axios from 'axios';
import { nytAllLists } from './recommendedBooks/recommendedBooksQuery.jsx';

export default function RecommendedBooks() {
  const [books, setBooks] = useState([]);
  const [clickedBook, setClickedBook] = useState({});
  const [show, setShow] = useState(false);

  useEffect(async () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    try {
      let bestsellers = await axios.get(
        '/book/bestsellers?list=' + nytAllLists[getRandomInt(nytAllLists.length)]
      );
      setBooks(bestsellers.data.results.books);
    } catch {
      console.log('Error getting bestsellers');
    }
  }, []);
  return (
    <>
      <h3>Recommended Books</h3>
      <div id='recommendBody'>
        {books.map((book, index) => {
          return (
            <div className='bookBody' key={index}>
              <img
                className='bookImage'
                variant='primary'
                onClick={() => {
                  setClickedBook(book);
                  setShow(true);
                }}
                src={book.book_image}
              ></img>
              <BookDetail setShow={setShow} show={show} isbn={clickedBook.primary_isbn10} />
            </div>
          );
        })}
      </div>
    </>
  );
}
