const router = require('express').Router();
const axios = require('axios');

// @desc    Retrieve top books from selected lists
// @route   GET /book/bestsellers
// @access  Public
router.get('/bestsellers', async(req, res) => {
  let key = req.query.apikey;
  let list = req.query.list;
  try {
    await axios
      .get(`https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?&api-key=${key}`)
      .then(response => { res.status(200).send(response.data); })
      .catch(error => { console.error(`Could not complete NYT Books API request for ${req.query.listName}: `, error.message); });
  } catch (error) {
    // console.error('cant sit here')
    res.status(500).send(error)
  }
})

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
