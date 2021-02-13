const router = require('express').Router();
const Bookclub = require('../models/bookclubs');

// @desc    Display all bookclubs
// @route   GET /bookclub/all
// @access  Public
router.get('/all', async (req, res) => {
  const clubs = await Bookclub.find().populate('owner');

  res.json(clubs);
});

// @desc    Get bookclub by id
// @route   GET /bookclub/:id
// @access  Public
router.get('/:id', async (req, res) => {
  // const clubs = await Bookclub.findOne({
  //   _id: req.params.id,
  //   members: {
  //     $elemMatch: { user: '60275a77860d8630b88f7ce6' },
  //   },
  // }).populate('owner');
  const clubs = await Bookclub.findById(req.params.id).populate(
    'owner',
    'username'
  );

  res.json(clubs);
});

// @desc    User creates a bookclub
// @route   POST /bookclub
// @access  Public
router.post('/', async (req, res) => {
  const { name, description, owner } = req.body;

  const newClub = new Bookclub({ name, description, owner });

  const createdClub = await newClub.save();

  res.status(201).json(createdClub);
});

// @desc    Current user joins a bookclub by ID
// @route   GET /bookclub/:id
// @access  Private
router.post('/join/:id', async (req, res) => {
  const club = await Bookclub.findById(req.params.id);
  const { userId } = req.body;

  // if club exist
  if (club) {
    // check if user is in club
    club.members.push({ user: userId });
    const updatedClub = await club.save();
    res.json(updatedClub);
  } else {
    res.status(404);
    throw new Error('Club not found');
  }
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
router.get('/search/:name', (req, res) => {});

module.exports = router;
