const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/users.js');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const path = require('path');

const hashPassword = (password, done) => {
  bcrypt.genSalt(12, (err, salt) => {
    if (err) done(err);
    else {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) done(err);
        else done(null, hash);
      });
    }
  });
};

router.get('/email/:address', (req, res) => {
  const email = req.params.address;
  const token = require('crypto').randomBytes(32).toString('hex');
  User.updateOne({ email: email }, { $set: { token: token } })
    .then((data) => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'papercutsbookstore@gmail.com',
          pass: 'ILIKEpiez'
        }
      });

      const mailOptions = {
        from: 'papercutsbookstore@gmail.com',
        to: email,
        subject: 'Password Reset Requested',
        text: `Someone has requested a password reset for this account. If this was not you, ignore this email and your password will not be changed. If this was you, click the following link:\n ${
          process.env.SERVER_URL || 'localhost:3000'
        }/reset/${token}`
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          res.status(500).send('error sending email');
        } else {
          res.send('Success');
        }
      });
    })
    .catch((err) => {
      res.status(404).send('No account with that email exists.');
    });
});

router.get('/:token', (req, res) => {
  User.findOne({ token: req.params.token }, 'email token')
    .then((user) => {
      res.redirect(`/changePassword/${user._doc.email}/${user._doc.token}`);
    })
    .catch((err) => {
      res.status(404).send('No such token exists');
    });
});

router.post('/:email/:token/:password', (req, res) => {
  const { token, email, password } = req.params;
  const newPassword = hashPassword(password, (err, hashedPassword) => {
    if (err) {
      res.status(500).send('Error hashing password');
      return;
    }
    User.updateOne(
      { token, email },
      {
        $set: {
          password: hashedPassword,
          token: null
        }
      }
    )
      .then((dbResponse) => {
        if (dbResponse.n === 1) {
          res.send('Password Changed');
        } else res.status(400).send('Email/Token combination not found');
      })
      .catch((err) => {
        res.status(500).send('Error changing password');
      });
  });
});

module.exports = router;
