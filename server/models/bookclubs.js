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
  bigImg: {
    type: String,
    required: true,
  },
  smallImg: {
    type: String,
    required: true,
  },
  questionnaire: [
    {
      questions: [
        {
          type: String,
          required: true,
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
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events',
        required: true,
      },
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = Bookclub = mongoose.model('Bookclubs', BookclubSchema);
