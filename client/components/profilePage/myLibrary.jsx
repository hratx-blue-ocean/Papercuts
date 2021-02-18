import React, { useState } from 'react';
import axios from 'axios';
import { Button, ListGroup, Container } from 'react-bootstrap';
import BookDetail from '../global/BookDetail.jsx';
import RecommendedBooks from './recommendedBooks.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const myLibrary = async (props) => {
  const [booksOwned, setBooksOwned] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [clickedBook, setClickedBook] = useState();

  useEffect(() => {
    try {
      axios
        .get('user/book', { userId: props.user._id })
        .then((userBooks) => setBooksOwned(userBooks.data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  let searchBooks = function (e) {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchInput}&maxResults=25`
      )
      .then((results) => {
        let searchResults = results.data.items.map((book) => {
          let bookInfo = {};
          (bookInfo.title = book.volumeInfo.title),
            (bookInfo.authors = book.volumeInfo.authors),
            (bookInfo.isbn = book.volumeInfo.industryIdentifiers[0].identifier);
          bookInfo.description = book.volumeInfo.description;
          bookInfo.image = book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : 'https://i.imgur.com/sJ3CT4V.gif';
          bookInfo.price = book.saleInfo.listPrice
            ? `$${book.saleInfo.listPrice.amount}`
            : 'Not Available';
          return bookInfo;
        });
        setBooksOwned(searchResults);
      });
  };

  const [show, setShow] = useState(false);
  return (
    <div id='myLib'>
      <div>My Library</div>
      <form onSubmit={searchBooks.bind(this)}>
        <input
          type='text'
          placeholder='Search books by author'
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <input type='submit' />
      </form>
      <div id='libraryBody'>
        {booksOwned.map((book) => {
          return (
            <div className='bookBody' key={book.isbn}>
              <img
                className='bookImage'
                variant='primary'
                onClick={() => {
                  setClickedBook(book);
                  setShow(true);
                }}
                src={book.image}
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
      <RecommendedBooks />
    </div>
  );
};

export default myLibrary;
