const express = require("express");
const app = express();
const expressStaticGzip = require("express-static-gzip");
const port = 3000;

//Middleware
app.use(express.static('client/dist'))
// app.use(
//   "/",
//   expressStaticGzip("client/dist", {
//     enableBrotli: true,
//     orderPreference: ["br"],
//     setHeaders: function (res, path) {
//       res.setHeader("Cache-Control", "public, max-age=31536000");
//     },
//   })
// );

app.get('/', (req,res) => {
  res.send('hello from server');
})


app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
