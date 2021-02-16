const router = require('express').Router();
const Book = require('../models/books');
// @desc    Display 7 trending books
// @route   GET /book/trending
// @access  Public
router.get('/trending', (req, res) => {});

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
