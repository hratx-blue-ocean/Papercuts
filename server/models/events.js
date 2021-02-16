const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    schedule: {
      type: String,
      required: true,
    },
    zoom_link: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: 'created_at' } }
);

module.exports = Event = mongoose.model('Events', EventSchema);
