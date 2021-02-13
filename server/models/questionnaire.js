const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
  question_1: String,
  question_2: String,
  question_3: String,
  question_4: String,
  question_5: String,
  question_6: String,
});

module.exports = Questionnaire = mongoose.model(
  'Questionnaire',
  questionnaireSchema
);
