const router = require('express').Router();
const axios = require('axios');

// @desc    Retrieve top books from selected lists
// @route   GET /book/bestsellers
// @access  Public
router.get('/bestsellers', async (req, res) => {
  let key = req.query.apikey;
  let list = req.query.list;
  try {
    await axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?&api-key=${key}`
      )
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        console.error(
          `Could not complete NYT Books API request for ${req.query.listName}: `,
          error.message
        );
      });
  } catch (error) {
    // console.error('cant sit here')
    res.status(500).send(error);
  }
});

// @desc    Display 7 trending books
// @route   GET /book/trending
// @access  Public
router.get('/trending', async (req, res) => {
  let isbn = req.query.bookIsbn;
  let key = req.query.apikey;
  console.log('this is the google isbn: ', isbn);
  console.log('this is the google key: ', key);

  try {
    await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${isbn}&key=${key}`)
      .then((response) => {
        console.log('get response: ', response);
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } catch (error) {
    console.error(
      `Could not complete Google Books API request for ISBN ${isbn}: `,
      error
    );
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

// @desc    Get one book's details
// @route   GET /book/details/:id
// @access  Public
router.get('/details/:id', async (req, res) => {
  let { id } = req.params;
  console.log('id', id);
  console.log('apikey', process.env.GOOGLE_API_KEY);

  try {
    let response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.GOOGLE_API_KEY}`
    );
    res.send(response.data);
  } catch (error) {
    console.error(
      `Could not complete Google Books API request for id ${id}: `,
      error
    );
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
