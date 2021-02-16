const mongoose = require('mongoose');

const BookclubSchema = new mongoose.Schema(
  {
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
    smallThumbnail: String,
    thumbnail: String,
    questionnaire: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Questionnaire',
      },
    ],
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
      },
    ],
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events',
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: { createdAt: 'created_at' } }
);

module.exports = Bookclub = mongoose.model('Bookclubs', BookclubSchema);
