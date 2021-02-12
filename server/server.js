const expressStaticGzip = require('express-static-gzip');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Body parser
app.use(express.json());

// Routes
app.use('/bookclub', require('./routes/BookclubRoute'));
app.use('/user', require('./routes/UserRoute'));
app.use('/book', require('./routes/BookRoute'));

app.use(
  '/',
  expressStaticGzip('client/dist', {
    enableBrotli: true,
    orderPreference: ['br'],
    setHeaders: function (res, path) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    },
  })
);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
