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
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) done(err);
      else done(null, hash);
    });
  });
};

router.get('/email/:email', (req, res) => {
  let email = req.params.email;
  let token = require('crypto').randomBytes(32).toString('hex');
  User.updateOne({ email: email }, { $set: { token: token } })
    .then((data) => {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'papercutsbookstore@gmail.com',
          pass: 'ILIKEpiez',
        },
      });

      let mailOptions = {
        from: 'papercutsbookstore@gmail.com',
        to: email,
        subject: 'Password Reset Requested',
        text: `Someone has requested a password reset for this account. If this was not you, ignore this email and your password will not be changed. If this was you, click the following link:\n ${
          process.env.SERVER_URL || 'localhost:3000'
        }/reset/${token}`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          res.status(401).send('error sending email');
        } else {
          console.log('Email sent: ' + info.response);
          res.send('Success');
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send('No account with that email exists.');
    });
});

router.get('/:token', (req, res) => {
  User.findOne({ token: req.params.token }, 'email token')
    .then((user) => {
      res.redirect(`/changePassword/${user._doc.email}/${user._doc.token}`);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/:email/:token/:password', (req, res) => {
  console.log(req.params);
  let newPassword = hashPassword(req.params.password, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    User.updateOne(
      { token: req.params.token, email: req.params.email },
      {
        $set: {
          password: result,
          token: null,
        },
      }
    )
      .then((result) => {
        console.log(result);
        if (result.n === 1) {
          res.send('Password Changed');
        } else res.send('Email/Token combination not found');
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send('Error changing password');
      });
  });
});

module.exports = router;
