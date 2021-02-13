const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/users.js');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const bcrypt = require('bcryptjs');

const hashPassword = (password, done) => {
  bcrypt.genSalt(12, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          return done(null, false, { message: err });
        });
    });
  }
  }
}