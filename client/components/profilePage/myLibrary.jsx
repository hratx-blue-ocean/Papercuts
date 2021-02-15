import React, {useState} from "react";
import axios from "axios";


export default function myLibrary() {
  const books = [
    {
      volumeInfo: {
        title: "The Cat in The Hat",
        authors: "Dr. Seuss",
        industryIdentifiers:[{identifier:7891036757892}]
      },
      description: "The Cat in The Hat jumps back!",
      isbn: "9780375850967",
      image:
        "http://books.google.com/books/content?id=FtVIabJkEUcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      price: 13.99,
      category: "Juvenile Fiction",
      rating: 3,
      ratingCount: 11,
      datePurchased: "11/30/2021",
    },
    {
      volumeInfo: {
        title: "The Grinch",
        authors: "Dr. Seuss",
        industryIdentifiers:[{identifier:7891036457892}]
        },
      description: "Youre a mean one, Mr. Grinch!",
      isbn: "5760375843767",
      image:
        "http://books.google.com/books/content?id=FtVIabJkEUcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      price: 19.99,
      category: "Juvenile Fiction",
      rating: 5,
      ratingCount: 7,
      datePurchased: "02/15/2021",
    },
  ];

  let [booksOwned, setBooksOwned] = useState(books);
  let [searchInput, setSearchInput] = useState('');
  let searchBooks = function (e) {
    e.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchInput}`)
    .then((results)=> {
      let searchResults = results.data.items.map((book) => {
        return book;
      });
      setBooksOwned(searchResults);
    })
  }


  return (
    <div>
      <form onSubmit = {searchBooks.bind(this)}>
        <input type = 'text' placeholder = 'Search books by author' onChange = {(e)=> setSearchInput(e.target.value)}/>
        <input type = 'submit'/>
      </form>
      <div>
      {booksOwned.map((book) => {
        return(
          <div key={booksOwned.indexOf(book)}>
            <div>{book.volumeInfo.title}</div>
            <div>{book.volumeInfo.authors}</div>
            <div>{book.volumeInfo.industryIdentifiers[0].identifier}</div>
            <br/>
          </div>
        )
      })}
      </div>
    </div>
  )
};
