const express = require('express');
const session = require('express-session');
const path = require('path');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const expressStaticGzip = require('express-static-gzip');
const passport = require('./passport/setup.js');
const Subscription = require('./models/subscription');
require('dotenv').config();

//Vars
const app = express();
const dbURI = `mongodb+srv://jfleming9357:${process.env.MONGO_PASS}@cluster0.v4rli.mongodb.net/papercut?retryWrites=true&w=majority`;

const port = process.env.PORT || 3000;

//db connection
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(console.log(`MongoDB connected ${dbURI}`))
  .catch((err) => console.log(err));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'aY5LZhOHMm!i',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/bookclub', require('./routes/BookclubRoute'));
app.use('/user', require('./routes/UserRoute'));
app.use('/book', require('./routes/BookRoute'));
app.use('/api/auth', require('./routes/AuthRoute'));
app.use('/reset', require('./routes/resetRoute'));
app.use('/checkout', require('./routes/PaymentRoute'));
app.use(
  '/',
  expressStaticGzip('client/dist', {
    enableBrotli: true,
    orderPreference: ['br'],
    setHeaders: function (res, path) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  })
);

const isAuthenticated = (req, res, next) => {
  if (req.user) return next();
  else return res.status(401).send('User is not authenticated');
};

app.get('/checkauth', isAuthenticated, function (req, res) {
  delete req.user._doc.password;
  Subscription.findOne({ _id: req.user.subscriptionTier })
    .then((subscription) => {
      req.user._doc.subscription = subscription;
      res.status(200).send(req.user);
    })
    .catch((err) => {
      res.status(400).send(req.user);
    });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
