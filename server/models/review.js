const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  comment: {
    type: String,
  },
});

module.exports = Review = mongoose.model('Reviews', ReviewSchema);
