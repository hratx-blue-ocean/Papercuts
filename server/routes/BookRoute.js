const router = require('express').Router();
const axios = require('axios');

// @desc    Retrieve top books from selected lists
// @route   GET /book/bestsellers
// @access  Public
router.get('/bestsellers', async(req, res) => {
  let list = req.body.listName;
  let key = req.params.apikey;
  console.log('this is the key: ', key);
  console.log('It made it to the router')
  try {
    const bestSellers =
      await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key:${key}`)
        .catch(error => { console.error(`Could not complete NYT Books API request for ${list}: `, error)});

    res.send(bestSellers.data)
  } catch (error) {
    console.error('cant sit here')
    res.status(500).send(error)
  }
})

// @desc    Display 7 trending books
// @route   GET /book/trending
// @access  Public
router.get('/trending', async(req, res) => {
  let isbn = req.params.isbn;
  let key = req.params.apikey;
  try {
    const trenders =
      await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${key}`)
        .catch(error => { console.error(`Could not complete Google Books API request for ISBN ${isbn}: `, error)});

    res.send(trenders.data);
  } catch (error) {
    res.status(500).send(error);
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
