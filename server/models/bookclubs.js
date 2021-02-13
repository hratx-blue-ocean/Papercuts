const mongoose = require('mongoose');

const BookclubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  questionnaire: [
    {
      question: {
        type: String,
        required: true,
      },
      answers: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            required: true,
          },
          answer: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
  members: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
      },
    },
  ],
  events: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events',
        required: true,
      },
    },
  ],
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
      },
      review: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = Bookclub = mongoose.model('Bookclubs', BookclubSchema);
