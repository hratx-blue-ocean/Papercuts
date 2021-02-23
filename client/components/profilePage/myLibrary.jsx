import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, ListGroup, Container, Image } from 'react-bootstrap';
import BookDetail from '../global/BookDetail.jsx';
import RecommendedBooks from './recommendedBooks.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import inLibraryMark from './book.png';
import { AppContext } from '../../context/context.jsx';

export default function myLibrary({ user }) {
  const [booksOwned, setBooksOwned] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [clickedBook, setClickedBook] = useState({});
  const [booksInLibrary, setBooksInLibrary] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    user &&
      axios.get(`/user/book/${user._id}`).then((results) => {
        setBooksInLibrary(results.data.library);
        setBooksOwned(results.data.library);
      });
  }, [user]);

  let searchBooks = function (e) {
    e.preventDefault();
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchInput}&maxResults=25`)
      .then((results) => {
        let searchResults = results.data.items.map((book) => {
          let bookInfo = {};
          bookInfo.id = book.id;
          bookInfo.title = book.volumeInfo.title;
          bookInfo.authors = book.volumeInfo.authors;
          bookInfo.isbn = book.volumeInfo.industryIdentifiers.find(
            (el) => (el.type = 'ISBN_13')
          ).identifier;
          bookInfo.description = book.volumeInfo.description;
          bookInfo.image = book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : 'https://i.imgur.com/sJ3CT4V.gif';
          bookInfo.price = book.saleInfo.listPrice
            ? `$${book.saleInfo.listPrice.amount}`
            : 'Not Available';
          bookInfo.inLibrary = false;
          for (let i = 0; i < booksInLibrary.length; i++) {
            if (bookInfo.id === booksInLibrary[i].googleId) {
              bookInfo.inLibrary = true;
            }
          }
          return bookInfo;
        });
        searchResults.sort(function (x, y) {
          return x.inLibrary == true ? -1 : y.inLibrary == false ? 1 : 0;
        });
        setBooksOwned(searchResults);
      });
  };
  return (
    <div id='myLib'>
      <h3>My Library</h3>
      <form onSubmit={searchBooks.bind(this)}>
        <input
          type='text'
          placeholder='Search books by author'
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button type='submit'>Submit</Button>
        <Button
          onClick={() => {
            setBooksOwned(booksInLibrary);
          }}
        >
          Show Library
        </Button>
      </form>
      <div id='libraryBody'>
        {booksOwned.map((book, index) => {
          return (
            <div className='bookBody' key={index}>
              {book.inLibrary ? (
                <div>
                  <img
                    className='bookImageOwned'
                    variant='primary'
                    onClick={() => {
                      setClickedBook(book);
                      setShow(true);
                    }}
                    src={book.image}
                  ></img>
                  <img className='bookMarker' src={inLibraryMark}></img>
                </div>
              ) : (
                <img
                  className='bookImage'
                  variant='primary'
                  onClick={() => {
                    setClickedBook(book);
                    setShow(true);
                  }}
                  src={book.image}
                ></img>
              )}
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
      <BookDetail isbn={clickedBook.isbn} show={show} setShow={setShow} />
    </div>
  );
}
