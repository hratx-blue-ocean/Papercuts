const router = require('express').Router();

// @desc    Display 7 trending books
// @route   GET /book/trending
// @access  Public
router.get('/trending', (req, res) => {});

// @desc    Display 7 book according to the genre
// @route   GET /book/genre/:genre
// @access  Public
router.get('/genre/:genre', (req, res) => {});

// @desc    Get book of the month
// @route   GET /book/ofthemonth
// @access  Public
router.get('/ofthemonth/', (req, res) => {});

// @desc    Get book by bookname
// @route   GET /book/title/:title
// @access  Public
router.get('/title/:title', (req, res) => {});

module.exports = router;
