const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/users.js');

//handles registration and login
router.post('/login', (req, res, next) => {
  User.findOne({ email: req.query.email })
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
  User.findOne({ email: req.query.email })
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
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(400).send(err);
    }
    if (!user) {
      return res.status(400).send(info);
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).send(`Logged in as ${user.id}`);
    });
  })(req, res, next);
};

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
