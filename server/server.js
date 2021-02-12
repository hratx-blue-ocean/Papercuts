const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const expressStaticGzip = require("express-static-gzip");

const port = 3000;

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
