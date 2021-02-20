const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  authors: Array,
  googleId: String,
  description: String,
  image: String,
  price: Number,
  category: Array,
  purchase_date: {
    type: Date,
    default: Date.now
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reviews'
    }
  ]
});

module.exports = Book = mongoose.model('Books', BookSchema);
