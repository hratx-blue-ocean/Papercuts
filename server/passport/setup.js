const bcrypt = require("bcryptjs");
const User = require("../models/users.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var GoogleStrategy = require("passport-google-oauth").OAuthStrategy;

//grabs specified content (user.id) from the user object and stores it on the session object (req.session.passport.user)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//uses whatever was set with serialize (user.id) and retrieves an object based on that
//fetched object is attached to the request object as req.user
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          const newUser = new User({ email, password });
          //creates hashed password, stores with salt in the same field delimited by $
          //ex: $2b$10$uuIKmW3Pvme9tH8qOn/H7uZqlv9ENS7zlIbkMvCSDIv7aup3WNH9W
          //$2b = bcrypt algorithm version used
          //$10 === 'cost factor', or salt rounds used (2**10 key expansion rounds)
          //chars before / are the salt
          //chars after / are hashed password
          //fun fact: cost factor should increase by 1 every 18 months (which assumes cpu processing power doubles every 18 months), can calculate cost so that running the salt rounds takes at least 250ms
          bcrypt.genSalt(12, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then((user) => {
                  return done(null, user);
                })
                .catch((err) => {
                  return done(null, false, { message: err });
                });
            });
          });
        } else {
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Wrong password" });
            }
          });
        }
      })
      .catch((err) => {
        return done(null, false, { message: err });
      });
  })
);

module.exports = passport;
