const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();

// @desc    Retrieve top books from selected lists
// @route   GET /book/bestsellers
// @access  Public
router.get('/bestsellers', async(req, res) => {
  const key = process.env.NYT_KEY;
  const { list } = req.query;
  console.log('NYT keys: ', key);
  console.log('NYT list: ', list);
  try {
    const bestSeller = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?&api-key=${key}`);
    console.log('bestSeller: ', bestSeller);
    res.json(bestSeller.data);
  } catch (err) {
    res.status(404).send(err);
  }
});

// @desc    Display 7 trending books
// @route   GET /book/trending
// @access  Public
router.get('/trending', async(req, res) => {
  let isbn = req.query.bookIsbn;
  let key = req.query.apikey;
  console.log('this is the google isbn: ', isbn);
  console.log('this is the google key: ', key);

  try {
    await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${isbn}&key=${key}`)
      .then(response => {
        console.log('get response: ', response)
        res.status(200).send(response)
      })
      .catch(error => { res.status(500).send(error); });
  } catch (error) {
    console.error(`Could not complete Google Books API request for ISBN ${isbn}: `, error);
  }
});

const Book = require('../models/books');
// @desc    Display 7 trending books
// @route   GET /book/trending
// @access  Public
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(404).send(err);
  }
});

// @desc    Post a book to save in the database
// @route   POST /book
router.post('/', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedDoc = await newBook.save();

    res.status(201).send(savedDoc);
  } catch (err) {
    res.status(400).send(err);
  }
});

// @desc    Get book of the month
// @route   GET /book/ofthemonth
// @access  Public
router.get('/ofthemonth/', (req, res) => {});

// @desc    Get book by bookname
// @route   GET /book/title/:title
// @access  Public
router.get('/title/:title', (req, res) => {});

module.exports = router;
