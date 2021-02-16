const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: { createdAt: 'created_at' } }
);

module.exports = Comment = mongoose.model('Comment', CommentSchema);
