const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const expressStaticGzip = require("express-static-gzip");
const passport = require("./passport/setup.js");
const auth = require("./authRoutes/auth.js");
require("dotenv").config();

const app = express();
const port = 3000;
const dbURI = `mongodb+srv://jfleming9357:${process.env.MONGO_PASS}@cluster0.v4rli.mongodb.net/papercut?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log(`MongoDB connected ${dbURI}`))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "aY5LZhOHMm!i",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api/auth", auth);
app.use(
  "/",
  expressStaticGzip("client/dist", {
    enableBrotli: true,
    orderPreference: ["br"],
    setHeaders: function (res, path) {
      res.setHeader("Cache-Control", "public, max-age=31536000");
    },
  })
);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
