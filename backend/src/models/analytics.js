const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.ObjectId,
  },
  questionId: {
    type: mongoose.Schema.ObjectId,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
  },
  selectedOption: {
    type: Number,
  },
});

const Analytic = mongoose.model("analytics", analyticsSchema);

module.exports = {
  Analytic,
};
