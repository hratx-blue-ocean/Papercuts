import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCarousel from './booksCarousel.jsx'
import BookModal from './bookModal.jsx';

const Books = () => {
  const [book, setBook] = useState({})
  const [show, setShow] = useState(false);
  const [trendFiction, setTradeFiction] = useState([]);
  const [nonFiction, setNonFiction] = useState([]);
  const [seriesBooks, setSeriesBooks] =useState([])
  const [manga, setManga] = useState([])
  const [youngAdult, setYoungAdult] = useState([])
  const [moreFiction, setMoreFiction] = useState([])
useEffect( () => {
//  axios.get('/book/bestsellers?list=combined-print-and-e-book-nonfiction').then(res => {
//    if (res.data) setNonFiction(res.data.results.books)
//  })
//  //combined-print-and-e-book-fiction
//  axios.get('/book/bestsellers?list=trade-fiction-paperback').then(res => {
//   if (res.data) setMoreFiction(res.data.results.books)
// })
//  axios.get('/book/bestsellers?list=hardcover-fiction').then(res => {
//   if (res.data) setTradeFiction(res.data.results.books)
// })
//  axios.get('/book/bestsellers?list=series-books').then(res => {
//   if (res.data) setSeriesBooks(res.data.results.books)
// })
// axios.get('/book/bestsellers?list=manga').then(res => {
//   if (res.data) setManga(res.data.results.books)
// })
// axios.get('/book/bestsellers?list=young-adult').then(res => {
//   if (res.data) setYoungAdult(res.data.results.books)
// })
}, [])


  return (
    <div>
      <p>Best NY times seller fictions</p>
      <BookCarousel books={trendFiction} setModalBook={setBook} setShow={setShow} />

      <p>More trade fictions</p>
      <BookCarousel books={moreFiction} setModalBook={setBook} setShow={setShow} />

      <p>Current trending non-fictions</p>
      <BookCarousel books={nonFiction} setModalBook={setBook} setShow={setShow}/>

      <p>Popular yound Adults</p>
      <BookCarousel books={youngAdult} setModalBook={setBook} setShow={setShow} />

      <p>explore manga</p>
      <BookCarousel books={manga} setModalBook={setBook} setShow={setShow} />

      <p>Top pick series books for children</p>
      <BookCarousel books={seriesBooks} setModalBook={setBook} setShow={setShow} />

      <BookModal book={book} show={show} setShow={setShow}/>
    </div>

  )
};

export default Books;

