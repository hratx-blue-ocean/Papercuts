const router = require('express').Router();

// @desc    Display all bookclubs
// @route   GET /bookclub/all
// @access  Public
router.get('/all', (req, res) => {
  const id = req.params.id;
});

// @desc    Get bookclub by id
// @route   GET /bookclub/:id
// @access  Public
router.get('/:id', (req, res) => {
  const id = req.params.id;
});

// @desc    Current user joins a bookclub by ID
// @route   GET /bookclub/:id
// @access  Private
router.get('/join/:id', (req, res) => {
  const id = req.params.id;
});

// @desc    Current user leaveas a bookclub by ID
// @route   GET /bookclub/:id
// @access  Private
router.delete('/leave/:id', (req, res) => {
  const id = req.params.id;
});

// @desc    Get bookclubs by name
// @route   GET /bookclub/search/:name
// @access  Private
router.delete('/search/:name', (req, res) => {});

module.exports = router;
