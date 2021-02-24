import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCarousel from './booksCarousel.jsx';
import BookDetail from '../global/BookDetail.jsx';

const Books = () => {
  const [photo, setPhoto] = useState('');
  const [book, setBook] = useState('');
  const [show, setShow] = useState(false);
  // const [trendFiction, setTrendFiction] = useState([]);
  // const [nonFiction, setNonFiction] = useState([]);
  // const [seriesBooks, setSeriesBooks] = useState([]);
  // const [manga, setManga] = useState([]);
  // const [youngAdult, setYoungAdult] = useState([]);
  // const [moreFiction, setMoreFiction] = useState([]);
  const [books, setBooks] = useState({});

  const currentTime = new Date().getTime();
  const storedBooks = JSON.parse(localStorage.getItem('booksByGenre'));

  useEffect(() => {
    if (localStorage.getItem('booksByGenre') !== null && currentTime <= storedBooks.expiry) {
      console.log('trying to use localstorage')
      setBooks(JSON.parse(localStorage.getItem('booksByGenre')));
    } else {
      console.log('Over a minute old')
      localStorage.removeItem('booksByGenre')
      homepageQueries();
    }
  }, []);

  const genreData = {
    nonFiction: [],
    moreFiction: [],
    trendFiction: [],
    seriesBooks: [],
    manga: [],
    youngAdult: [],
    expiry: new Date().getTime() + (1440 * 60000)
  }

  async function homepageQueries() {
    await axios.get('/book/bestsellers?list=combined-print-and-e-book-nonfiction').then((res) => {
      // if (res.data) setNonFiction(res.data.results.books);
      if (res.data) genreData.nonFiction = res.data.results.books;
    });
    //combined-print-and-e-book-fiction
    await axios.get('/book/bestsellers?list=trade-fiction-paperback').then((res) => {
      // if (res.data) setMoreFiction(res.data.results.books);
      if (res.data) genreData.moreFiction = res.data.results.books;
    });
    await axios.get('/book/bestsellers?list=hardcover-fiction').then((res) => {
      // if (res.data) setTrendFiction(res.data.results.books);
      if (res.data) genreData.trendFiction = res.data.results.books;
    });
    await axios.get('/book/bestsellers?list=series-books').then((res) => {
      // if (res.data) setSeriesBooks(res.data.results.books);
      if (res.data) genreData.seriesBooks = res.data.results.books;
    });
    await axios.get('/book/bestsellers?list=manga').then((res) => {
      // if (res.data) setManga(res.data.results.books);
      if (res.data) genreData.manga = res.data.results.books;
    });
    await axios.get('/book/bestsellers?list=young-adult').then((res) => {
      // if (res.data) setYoungAdult(res.data.results.books);
      if (res.data) genreData.youngAdult = res.data.results.books;
    });

    await setGenresLocalStorage();
  }

  function setGenresLocalStorage() {
    setBooks(genreData);
    console.log(books);
    localStorage.setItem('booksByGenre', JSON.stringify(genreData));
  }

  return (
    <div className='carouselTitles'>
      <p>New York Times Hardcover Fiction Best Sellers</p>
      {books.trendFiction &&
        <BookCarousel
          books={books.trendFiction}
          setModalBook={setBook}
          setShow={setShow}
          setPhoto={setPhoto}
        />
      }

      <p>New York Times Paperback Fiction Best Sellers</p>
      {books.moreFiction &&
        <BookCarousel
          books={books.moreFiction}
          setModalBook={setBook}
          setShow={setShow}
          setPhoto={setPhoto}
        />
      }

      <p>Trending Non-fiction</p>
      {books.nonFiction &&
        <BookCarousel
          books={books.nonFiction}
          setModalBook={setBook}
          setShow={setShow}
          setPhoto={setPhoto}
        />
      }

      <p>Popular with Young Adult</p>
      {books.youngAdult &&
        <BookCarousel
          books={books.youngAdult}
          setModalBook={setBook}
          setShow={setShow}
          setPhoto={setPhoto}
        />
      }

      <p>Explore Manga</p>
      {books.manga &&
        <BookCarousel
          books={books.manga}
          setModalBook={setBook}
          setShow={setShow}
          setPhoto={setPhoto}
        />
      }

      <p>Series Books for Kids</p>
      {books.seriesBooks &&
        <BookCarousel
          books={books.seriesBooks}
          setModalBook={setBook}
          setShow={setShow}
          setPhoto={setPhoto}
        />
      }

      <BookDetail isbn={book} photo={photo} show={show} setShow={setShow} />
    </div>
  );
};

export default Books;
