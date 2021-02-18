const mongoose = require('mongoose');

const ThirdPartyProviderSchema = new mongoose.Schema({
  provider_name: {
    type: String,
    default: null
  },
  provider_id: {
    type: String,
    default: null
  },
  provider_data: {
    type: {},
    default: null
  }
});

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      default: null
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    email_is_verified: {
      type: Boolean,
      default: false
    },
    password: {
      type: String,
      required: true
    },
    third_party_auth: [ThirdPartyProviderSchema],
    date: {
      type: Date,
      default: Date.now
    },
    photoUrl: {
      type: String,
      default: null
    },
    subscriptionTier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subscriptions'
    },
    library: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books'
      }
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
      }
    ],
    bookPreference: {
      type: String
    },
    recommendation: {
      summary: String,
      description: String
    },
    bookclubs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bookclubs'
      }
    ],
    address: {
      type: String
    },
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Payments'
    }
  },
  { strict: false }
);

module.exports = User = mongoose.model('Users', UserSchema);
