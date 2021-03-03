const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/users.js');

//handles registration and login
router.post('/login', (req, res, next) => {
  const { email } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        res.status(401).send('No account registered by that email');
      } else {
        register_login(req, res, next);
      }
    })
    .catch((err) => console.log(err));
});

router.post('/register', (req, res, next) => {
  const { email } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        res.status(401).send('Account already registered by that email');
      } else {
        register_login(req, res, next);
      }
    })
    .catch((err) => console.log(err));
});

const register_login = (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return res.status(400).send(err);
    }
    if (!user) {
      return res.status(400).send(info);
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.status(400).send(err);
      }
      return res.redirect('/');
    });
  })(req, res, next);
};

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
