const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  cardNumber: {
    type: Number,
    required: true,
  },
  cardHolder: {
    type: String,
    required: true,
  },
  cardCVC: {
    type: Number,
  },
  cardExpiredDate: {
    type: String,
  },
});

module.exports = Payment = mongoose.model('Payments', PaymentSchema);
