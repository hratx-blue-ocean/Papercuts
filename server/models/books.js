const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  authors: String,
  isbn: Number,
  description: String,
  image: String,
  price: Number,
  category: String,
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
