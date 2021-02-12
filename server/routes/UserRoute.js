const router = require('express').Router();

// @desc    Display all users that aren't friend with the current user
// @route   get /user/friends
// @access  Private
router.get('/friends', (req, res) => {
  // Return a list of all user from the db that isnt friends with the user
});

// @desc    User adding friend
// @route   post /user/friend/add
// @access  Private
router.post('/friend/add', (req, res) => {
  let { userID } = req.body;
  //   Add friend to current user
});

// @desc    Add user info
// @route   post /user/info
// @access  Private
router.post('/info', (req, res) => {
  let { password, username, email, photoImg } = req.body;

  // User updating info function
});

// @desc    Update user info
// @route   Put /user/info
// @access  Private
router.put('/info', (req, res) => {
  let { password, username, email, photoImg } = req.body;

  // User updating info function
});

// @desc    User add payment info
// @route   Post /user/payment
// @access  Private
router.post('/payment', (req, res) => {
  let { creditCard, address, postalCode, cvc } = req.body;

  // User updating info function
});

// @desc    User updates payment info
// @route   Put /user/payment
// @access  Private
router.put('/payment', (req, res) => {
  let { paymentID } = req.body;

  // User updating info function
});

// @desc    User delete payment info
// @route   Delete /user/payment
// @access  Private
router.delete('/payment', (req, res) => {
  let { paymentID } = req.body;

  // User updating info function
});

// @desc    User joins a subscription
// @route   post /user/subscription
// @access  Private
router.post('/subscription', (req, res) => {
  let { paymentID } = req.body;

  // User updating info function
});

// @desc    User cancels subscription
// @route   Delete /user/subscription
// @access  Private
router.delete('/subscription', (req, res) => {
  let { paymentID } = req.body;

  // User updating info function
});

module.exports = router;
