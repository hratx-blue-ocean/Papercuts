import React, { useState } from 'react';
import axios from 'axios';
import { Button, ListGroup, Container, Image } from 'react-bootstrap';
import BookDetail from '../global/BookDetail.jsx';
import RecommendedBooks from './recommendedBooks.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../../context/context.jsx';

export default function myLibrary() {
  const books = [
    {
      title: 'Green Eggs & Ham',
      authors: ['Dr. Seuss'],
      isbn: 7891036757892,
      description: 'I do not like my green eggs & ham, Sam I am',
      isbn: '9780375850967',
      imageLinks:
        {
          thumbnail: 'http://books.google.com/books/content?id=h7w4DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
        },
      price: '$13.99',
      category: 'Juvenile Fiction',
      rating: 3,
      ratingCount: 11,
      datePurchased: '11/30/2021'
    },
    {
      title: 'One Fish, Two Fish',
      authors: ['Dr. Seuss'],
      isbn: 7891036457892,
      description: 'One Fish, Two Fish, Red Fish, Blue Fish',
      isbn: '5760375843767',
      imageLinks:
        {
          thumbnail: 'http://books.google.com/books/content?id=067xAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
        },
      price: '$19.99',
      category: 'Juvenile Fiction',
      rating: 5,
      ratingCount: 7,
      datePurchased: '02/15/2021'
    }
  ];

  const [booksOwned, setBooksOwned] = useState(books);
  const [searchInput, setSearchInput] = useState('');
  const [clickedBook, setClickedBook] = useState(null);
  const [show, setShow] = useState(false);

  let searchBooks = function (e) {
    e.preventDefault();
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchInput}&maxResults=25`)
      .then((results) => {
        let searchResults = results.data.items.map((book) => {
          let bookInfo = {};
          bookInfo.title = book.volumeInfo.title;
          bookInfo.authors = book.volumeInfo.authors;
          bookInfo.id = book.volumeInfo.industryIdentifiers.find(
            (el) => (el.type = 'ISBN_10')
          ).identifier;
          bookInfo.description = book.volumeInfo.description;
          // bookInfo.imageLinks.thumbnail = book.volumeInfo.imageLinks
          //   ? book.volumeInfo.imageLinks.thumbnail
          //   : 'https://i.imgur.com/sJ3CT4V.gif';
          bookInfo.imageLinks = book.volumeInfo.imageLinks.thumbnail ?
            { thumbnail: book.volumeInfo.imageLinks.thumbnail } :
            { thumbnail: 'https://i.imgur.com/sJ3CT4V.gif' };

          bookInfo.price = book.saleInfo.listPrice
            ? `$${book.saleInfo.listPrice.amount}`
            : 'Not Available';
          return bookInfo;
        });
        setBooksOwned(searchResults);
      });
  };

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
        {booksOwned.map((book) => (
          <Image
            key={book.id}
            className='bookImage'
            variant='primary'
            onClick={(e) => {
              setClickedBook(book.id);
              setShow(true);
            }}
            src={book.imageLinks.thumbnail}
          />
        ))}
      </div>
      <RecommendedBooks />
      <BookDetail isbn={clickedBook} show={show} setShow={setShow} />
    </div>
  );
}






// {booksOwned.map((book) => {
//           return (
//             <div className='bookBody' key={book.isbn}>
//               <img
//                 className='bookImage'
//                 variant='primary'
//                 onClick={() => {
//                   setClickedBook(book);
//                   setShow(true);
//                 }}
//                 src={book.imageLinks.thumbnail}
//               ></img>
//               <BookDetail
//                 handleClose={() => {
//                   setShow(false);
//                 }}
//                 show={show}
//                 book={clickedBook}
//               />
//             </div>
//           );
//         })} */}