const Subscription = require('../models/subscription');
const Payment = require('../models/payments');
const router = require('express').Router();
const Book = require('../models/books');
const User = require('../models/users');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// @desc    Display all users
// @route   get /user/all
// @access  Private
router.get('/all', async (req, res) => {
  try {
    const users = await User.find().select('email');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// @desc    Delete all user's friend for testing
// @route   Delete /user/allfriends
// @access  Private
router.delete('/allfriends', async (req, res) => {
  const { userId } = req.body;
  try {
    const curUser = await User.findById(userId);
    curUser.friends = [];
    await curUser.save();

    res.json({ msg: 'Friends deleted' });
  } catch (error) {
    res.json(error);
  }
});

// @desc    Display all users that user is friends wuth
// @route   get /user/friends
// @access  Private
router.post('/friends', async (req, res) => {
  const { userId } = req.body;

  const { friends } = await User.findById(userId).select('friends').populate('friends', 'email');

  res.json(friends);
});

// @desc    Display all users that user is not friends wuth
// @route   get /user/friends
// @access  Private
router.post('/newfriends', async (req, res) => {
  const { userId } = req.body;
  let userObj = mongoose.Types.ObjectId(userId);

  const newfriends = await User.find({
    friends: { $ne: userObj },
    _id: { $ne: userObj },
  });

  res.json(newfriends);
});

// @desc    User adding friend
// @route   post /user/friend/add
// @access  Private
router.post('/friend', async (req, res) => {
  let { userId, friendId } = req.body;

  try {
    await User.updateOne(
      {
        _id: userId,
      },
      {
        $addToSet: { friends: friendId },
      }
    );

    res.json({ msg: 'Friend added' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// @desc    Update user info
// @route   Put /user/info
// @access  Private
router.put('/info', async (req, res) => {
  let { userId, password, newPassword, username, email, photoUrl } = req.body;

  try {
    User.findById(userId).then((user) => {
      if (!user) {
        return res.json({ msg: 'Cant find user' });
      }

      if (password) {
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            return res.json({ err });
          }

          if (isMatch) {
            bcrypt.genSalt(12, (error, salt) => {
              bcrypt.hash(newPassword, salt, (err, hash) => {
                if (err) throw err;

                user.password = hash;
                user.username = username || user.username;
                user.email = email || user.email;
                user.photoImg = photoImg || user.photoImg;

                user.save().then((usr) => {
                  return res.json(usr);
                });
              });
            });
          } else {
            return res.json({ msg: 'Wrong password' });
          }
        });
      } else {
        user.username = username || user.username;
        user.email = email || user.email;
        user.photoUrl = photoUrl || user.photoUrl;

        user.save().then(() => {
          return res.json({ msg: 'User updated' });
        });
      }
    });
  } catch (err) {
    return res.json({ err });
  }
});

// @desc    Get user payment info
// @route   Get /user/payment
// @access  Private
router.get('/payment', async (req, res) => {
  let { userId } = req.body;

  try {
    const userPayment = await User.findById(userId).populate('payment').select('payment -_id');

    res.json(userPayment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @desc    User add payment info
// @route   Post /user/payment
// @access  Private
router.post('/payment', async (req, res) => {
  let { userId, cardNumber, cardHolder, cardExpiredDate } = req.body;

  try {
    const newPayment = await new Payment({
      cardNumber,
      cardHolder,
      cardExpiredDate,
    }).save();

    const user = await User.findById(userId);
    user.payment = newPayment._id;
    await user.save();

    return res.json({ msg: 'Payment added' });
  } catch (err) {
    return res.json({ err });
  }
});

// @desc    User updates payment info
// @route   Put /user/payment
// @access  Private
router.put('/payment', async (req, res) => {
  let { paymentID, cardNumber, cardHolder, cardExpiredDate } = req.body;

  try {
    const currentPayment = await Payment.findById(paymentID);

    currentPayment.cardNumber = cardNumber;
    currentPayment.cardHolder = cardHolder;
    currentPayment.cardExpiredDate = cardExpiredDate;
    const updatedPayment = await currentPayment.save();

    return res.json(updatedPayment);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// @desc    User delete payment info
// @route   Delete /user/payment
// @access  Private
router.delete('/payment', async (req, res) => {
  let { userId } = req.body;

  try {
    const curUser = await User.findById(userId);
    curUser.payment = null;

    await curUser.save();

    return res.json({ msg: 'Payment Deleted' });
  } catch (err) {
    return res.json({ err });
  }
});

// @desc    Get user payment info
// @route   Get /user/payment
// @access  Private
router.get('/subscription', async (req, res) => {
  let { userId } = req.body;

  try {
    const userPayment = await await User.findById(userId)
      .populate('suscriptionTier')
      .select('suscriptionTier -_id');

    res.json(userPayment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @desc    User joins a subscription
// @route   post /user/subscription
// @access  Private
router.post('/subscription', async (req, res) => {
  let { userId, name, description, voucher } = req.body;

  try {
    const newSub = await new Subscription({
      name,
      description,
      voucher,
    }).save();

    const user = await User.findById(userId);
    user.suscriptionTier = newSub._id;
    await user.save();

    return res.json({ msg: 'Sub added' });
  } catch (error) {}
});

// @desc    User cancels subscription
// @route   Delete /user/subscription
// @access  Private
router.delete('/subscription', async (req, res) => {
  let { userId } = req.body;

  try {
    const curUser = await User.findById(userId);
    curUser.suscriptionTier = null;

    await curUser.save();

    return res.json({ msg: 'Sub canceled' });
  } catch (err) {
    return res.json({ err });
  }
});

// @desc    Get all books that the user owns
// @route   Get /user/book
// @access  Private
router.get('/book', async (req, res) => {
  let { userId } = req.body;

  try {
    const userBooks = await User.findById(userId).populate('library').select('library');

    return res.json(userBooks);
  } catch (err) {
    return res.json({ err });
  }
});

// @desc    User add book to their library
// @route   Post /user/book
// @access  Private
router.post('/book', async (req, res) => {
  let {
    userId,
    title,
    author,
    ISBN,
    thubnailURL,
    imageURL,
    price,
    category,
    rating,
    ratingCount,
  } = req.body;

  try {
    const newBook = await new Book({
      title,
      author,
      ISBN,
      thubnailURL,
      imageURL,
      price,
      category,
      rating,
      ratingCount,
    }).save();

    await User.findByIdAndUpdate(userId, {
      $push: { library: newBook._id },
    });

    return res.json({ msg: 'Book added successfully' });
  } catch (err) {
    return res.json({ err });
  }
});

module.exports = router;
