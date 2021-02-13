const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  ISBN: Number,
  thubnailURL: String,
  imageURL: String,
  price: Number,
  category: String,
  rating: Number,
  ratingCount: Number,
  purchase_date: {
    type: Date,
    default: Date.now,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reviews',
    },
  ],
});

module.exports = Book = mongoose.model('Books', BookSchema);
