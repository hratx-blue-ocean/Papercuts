import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, ListGroup, Container } from 'react-bootstrap';
import BookDetail from '../global/BookDetail.jsx';
import RecommendedBooks from './recommendedBooks.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import inLibraryMark from './book.png';

export default function myLibrary({user}) {

  // const books =
  // [{
  //     title: 'Green Eggs & Ham',
  //     authors: ['Dr. Seuss'],
  //     isbn: 7891036757892,
  //     description: 'I do not like my green eggs & ham, Sam I am',
  //     isbn: '9780375850967',
  //     image:
  //       'http://books.google.com/books/content?id=h7w4DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  //     price: '$13.99',
  //     category: 'Juvenile Fiction',
  //     rating: 3,
  //     ratingCount: 11,
  //     datePurchased: '11/30/2021',
  //   },
  //   {
  //     title: 'One Fish, Two Fish',
  //     authors: ['Dr. Seuss'],
  //     isbn: 7891036457892,
  //     description: 'One Fish, Two Fish, Red Fish, Blue Fish',
  //     isbn: '5760375843767',
  //     image:
  //       'http://books.google.com/books/content?id=067xAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  //     price: '$19.99',
  //     category: 'Juvenile Fiction',
  //     rating: 5,
  //     ratingCount: 7,
  //     datePurchased: '02/15/2021',
  //   },
  // ];

  const [booksOwned, setBooksOwned] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [clickedBook, setClickedBook] = useState();
  const [booksInLibrary, setBooksInLibrary] = useState([]);

  useEffect(()=>{
    axios.get(`/user/book/${user._id}`)
    .then ((results) => {
      setBooksInLibrary(results.data.library);
      setBooksOwned(results.data.library);
    })
  },[user])

  let searchBooks = function (e) {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchInput}&maxResults=25`
      )
      .then((results) => {
        let searchResults = results.data.items.map((book) => {
          let bookInfo = {};
          bookInfo.title = book.volumeInfo.title;
          bookInfo.authors = book.volumeInfo.authors;
          bookInfo.isbn = book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[0].identifier
          :
          'no ISBN';
          bookInfo.description = book.volumeInfo.description;
          bookInfo.image = book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : 'https://i.imgur.com/sJ3CT4V.gif';
          bookInfo.price = book.saleInfo.listPrice
            ? `$${book.saleInfo.listPrice.amount}`
            : 'Not Available';
          bookInfo.inLibrary = false;
          for (let i = 0; i < booksInLibrary.length; i++) {
            if (bookInfo.isbn === booksInLibrary[i].isbn.toString()) {
              bookInfo.inLibrary = true;
            }
          }
          return bookInfo;
        });
        searchResults.sort(function(x,y){ return x.inLibrary == true ? -1 : y.inLibrary == false ? 1 : 0; });
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
              {book.inLibrary ?
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
              <img
                className='bookMarker'
                src = {inLibraryMark}
              >
              </img>
              </div>
              :
              <img
              className='bookImage'
              variant='primary'
              onClick={() => {
                setClickedBook(book);
                setShow(true);
              }}
              src={book.image}
              ></img>
              }
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
}
