const router = require('express').Router();
const { DocumentProvider } = require('mongoose');
const { errorMonitor } = require('nodemailer/lib/mailer');
const Bookclub = require('../models/bookclubs');
const Questionnaire = require('../models/questionnaire');
const Comment = require('../models/comment');
const Event = require('../models/events');
const User = require('../models/users');

// @desc    Display all bookclubs
// @route   GET /bookclub/all
// @access  Public
router.get('/all', async (req, res) => {
  try {
    const clubs = await Bookclub.find().populate('owner', ['username', 'email', 'photoUrl']);

    res.json(clubs);
  } catch (err) {
    res.status(404).send(err);
  }
});

// @desc    Get bookclub by id
// @route   GET /bookclub/:id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const clubs = await Bookclub.findById(req.params.id).populate('owner', [
      'username',
      'email',
      'photoUrl'
    ]);

    res.json(clubs);
  } catch (err) {
    res.status(404).send(err);
  }
});

// @desc    Get bookclubs by name
// @route   GET /bookclub/:name
router.get('/', async (req, res) => {
  const { name } = req.body;
  try {
    const club = await Bookclub.findOne({ name });
    res.json(club);
  } catch (err) {
    res.status(404).send(err);
  }
});

// @desc    User creates a bookclub
// @route   POST /bookclub
// @access  Public
router.post('/', async (req, res) => {
  const { name, description, owner, thumbnail, smallThumbnail } = req.body;
  try {
    let newClub;

    if (!thumbnail || !smallThumbnail) {
      newClub = new Bookclub({ name, description, owner });
    }
    newClub = new Bookclub({ name, description, owner, thumbnail, smallThumbnail });

    await newClub.save();

    res.sendStatus(201);
  } catch (err) {
    res.status(400).send(err);
  }
});

// @desc    Current user joins a bookclub by ID
// @route   POST /bookclub/:id
// @access  Private
router.post('/join/:id', async (req, res) => {
  const { userId } = req.body;
  try {
    const club = await Bookclub.findById(req.params.id);
    if (!club) return res.status(404).send('the Club is not exist, try a different club id.');

    await User.findByIdAndUpdate(userId, {
      $push: { bookclubs: club._id }
    });

    club.members.addToSet(userId); //addToSet adds values to array if not already present;
    club.save();
    res.sendStatus(201);
  } catch (err) {
    res.status(400).send(err);
  }
});

// @desc    Current user leaveas a bookclub by ID
// @route   DELETE /bookclub/leave/:id
// @access  Private
router.delete('/leave/:id', async (req, res) => {
  const { userId } = req.body;
  try {
    const club = await Bookclub.findById(req.params.id);
    if (!club) return res.status(404).send('the Club is not exist, try a different club id.');

    await club.members.pull(userId);
    club.save();
    res.sendStatus(202);
  } catch (err) {
    res.status(400).send(err);
  }
});

// @desc    post the answers of questionnaire by bookclub id
// @route   POST /bookclub/questionnaire/:id
// @access  Private
router.post('/questionnaire/:id', async (req, res) => {
  try {
    const newQuestionnaire = new Questionnaire(req.body);
    const savedDoc = await newQuestionnaire.save();

    await Bookclub.findByIdAndUpdate(req.params.id, {
      $push: { questionnaire: savedDoc._id }
    });

    res.status(201).send(savedDoc);
  } catch (err) {
    res.status(400).send(err);
  }
});

// @desc    POST comment by user
// @route   POST /bookclub/comment/bookclub_id
router.post('/comment/:id', async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedDoc = await newComment.save();

    await Bookclub.findByIdAndUpdate(req.params.id, {
      $push: { comments: savedDoc._id }
    });

    res.status(201).send(savedDoc);
  } catch (err) {
    res.status(400).send(err);
  }
});

// @desc    GET all comments from a bookclub
// @route   GET /bookclub/comment/bookclub_id
router.get('/comment/:id', async (req, res) => {
  try {
    const club = await Bookclub.findById(req.params.id).populate('comments');

    res.json(club.comments);
  } catch (err) {
    res.status(404).send(err);
  }
});

// @desc    increase like counts by 1 in a comment
// @route   PUT /bookclub/comment/like/comment_id
router.put('/comment/like/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    res.status(202).json(comment);
  } catch (err) {
    res.status(406).send(err);
  }
});

// @desc    increase dislike counts by 1 in a comment
// @route   PUT /bookclub/comment/dislike/comment_id
router.put('/comment/dislike/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $inc: { dislikes: 1 } },
      { new: true }
    );
    res.status(202).json(comment);
  } catch (err) {
    res.status(406).send(err);
  }
});

// @desc    create a event for the current bookclub
// @route   POST /bookclub/event/bookclub_id
router.post('/event/:id', async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    const savedDoc = await newEvent.save();

    await Bookclub.findByIdAndUpdate(req.params.id, {
      $push: { events: savedDoc._id }
    });

    res.status(201).send(savedDoc);
  } catch (err) {
    res.status(400).send(err);
  }
});

// @desc    get all events for the current bookclub
// @route   GET /bookclub/event/bookclub_id
router.get('/event/:id', async (req, res) => {
  try {
    const club = await Bookclub.findById(req.params.id).populate('events');

    res.send(club.events);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
