const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
  answer_1: String,
  abswer_2: String,
  answer_3: String,
  answer_4: String,
  answer_5: String,
  answer_6: String,
});

module.exports = Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);
