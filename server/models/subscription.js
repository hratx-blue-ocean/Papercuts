const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  joinedAt: { type: Date, default: Date.now },
  voucher: {
    type: Number,
  },
});

module.exports = Subscription = mongoose.model(
  'Subscriptions',
  SubscriptionSchema
);
