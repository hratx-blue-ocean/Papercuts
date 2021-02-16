import React, {useState} from 'react';
import axios from 'axios';

export default function myLibrary() {
  const books =
  [{
      title: 'Green Eggs & Ham',
      authors: 'Dr. Seuss',
      isbn: 7891036757892,
      description: 'I do not like my green eggs & ham, Sam I am',
      isbn: '9780375850967',
      image:
        'http://books.google.com/books/content?id=h7w4DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      price: '$13.99',
      category: 'Juvenile Fiction',
      rating: 3,
      ratingCount: 11,
      datePurchased: '11/30/2021',
    },
    {
      title: 'One Fish, Two Fish',
      authors: 'Dr. Seuss',
      isbn: 7891036457892,
      description: 'One Fish, Two Fish, Red Fish, Blue Fish',
      isbn: '5760375843767',
      image:
        'http://books.google.com/books/content?id=067xAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      price: '$19.99',
      category: 'Juvenile Fiction',
      rating: 5,
      ratingCount: 7,
      datePurchased: '02/15/2021',
    },
  ];

  const [booksOwned, setBooksOwned] = useState(books);
  const [searchInput, setSearchInput] = useState('');

  let searchBooks = function (e) {
    e.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchInput}&maxResults=25`)
    .then((results)=> {
      let searchResults = results.data.items.map((book) => {
        let bookInfo = {};
        bookInfo.title= book.volumeInfo.title,
        bookInfo.authors= book.volumeInfo.authors,
        bookInfo.isbn= book.volumeInfo.industryIdentifiers[0].identifier;
        bookInfo.description = book.volumeInfo.description;
        bookInfo.image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://i.imgur.com/sJ3CT4V.gif';
        bookInfo.price = book.saleInfo.listPrice ? `$${book.saleInfo.listPrice.amount}` : 'Not Available'
        return bookInfo;
      });
      setBooksOwned(searchResults);
    })
  }

  const tempArray = Array(15).fill(0);
  return (
    <div id='myLib'>
      <form onSubmit = {searchBooks.bind(this)}>
        <input type = 'text' placeholder = 'Search books by author' onChange = {(e)=> setSearchInput(e.target.value)}/>
        <input type = 'submit'/>
      </form>
      <div id='libraryBody'>
      {booksOwned.map((book) => {
        return(
          <div className='bookBody'>
            <img className='bookImage' src={book.image}/>
          </div>
        )
      })}
      </div>
    </div>
  )
};
