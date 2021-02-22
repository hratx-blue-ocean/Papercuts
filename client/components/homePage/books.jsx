import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCarousel from './booksCarousel.jsx';
import BookDetail from '../global/BookDetail.jsx';

const Books = () => {
  const [photo, setPhoto] = useState('');
  const [book, setBook] = useState('');
  const [show, setShow] = useState(false);
  const [trendFiction, setTrendFiction] = useState([]);
  const [nonFiction, setNonFiction] = useState([]);
  const [seriesBooks, setSeriesBooks] = useState([]);
  const [manga, setManga] = useState([]);
  const [youngAdult, setYoungAdult] = useState([]);
  const [moreFiction, setMoreFiction] = useState([]);
  useEffect(() => {
    axios.get('/book/bestsellers?list=combined-print-and-e-book-nonfiction').then((res) => {
      if (res.data) setNonFiction(res.data.results.books);
    });
    //combined-print-and-e-book-fiction
    axios.get('/book/bestsellers?list=trade-fiction-paperback').then((res) => {
      if (res.data) setMoreFiction(res.data.results.books);
    });
    axios.get('/book/bestsellers?list=hardcover-fiction').then((res) => {
      if (res.data) setTrendFiction(res.data.results.books);
    });
    axios.get('/book/bestsellers?list=series-books').then((res) => {
      if (res.data) setSeriesBooks(res.data.results.books);
    });
    axios.get('/book/bestsellers?list=manga').then((res) => {
      if (res.data) setManga(res.data.results.books);
    });
    axios.get('/book/bestsellers?list=young-adult').then((res) => {
      if (res.data) setYoungAdult(res.data.results.books);
    });
  }, []);

  return (
    <div className='carouselTitles'>
      <p>New York Times Hardcover Fiction Best Sellers</p>
      <BookCarousel
        books={trendFiction}
        setModalBook={setBook}
        setShow={setShow}
        setPhoto={setPhoto}
      />

      <p>New York Times Paperback Fiction Best Sellers</p>
      <BookCarousel
        books={moreFiction}
        setModalBook={setBook}
        setShow={setShow}
        setPhoto={setPhoto}
      />

      <p>Trending Non-fiction</p>
      <BookCarousel
        books={nonFiction}
        setModalBook={setBook}
        setShow={setShow}
        setPhoto={setPhoto}
      />

      <p>Popular with Young Adult</p>
      <BookCarousel
        books={youngAdult}
        setModalBook={setBook}
        setShow={setShow}
        setPhoto={setPhoto}
      />

      <p>Explore Manga</p>
      <BookCarousel books={manga} setModalBook={setBook} setShow={setShow} setPhoto={setPhoto} />

      <p>Series Books for Kids</p>
      <BookCarousel
        books={seriesBooks}
        setModalBook={setBook}
        setShow={setShow}
        setPhoto={setPhoto}
      />

      <BookDetail isbn={book} photo={photo} show={show} setShow={setShow} />
    </div>
  );
};

export default Books;
