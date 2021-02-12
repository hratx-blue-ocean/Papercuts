const express = require("express");
const router = express.Router();
const passport = require("passport");

//handles registration and login
router.post("/register_login", (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
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
      return res.status(200).send(`Logged in as ${user.id}`);
    });
  })(req, res, next);
});

module.exports = router;
