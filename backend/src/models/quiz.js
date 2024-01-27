const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  url: {
    type: String,
  },
  maxTime: {
    type: Number,
  },
});

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  type: {
    type: String,
  },
  correctOption: {
    type: Number,
  },
  options: {
    type: [optionSchema],
  },
});

const quizSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  questions: {
    type: [questionSchema],
  },
});

const Quiz = mongoose.model("quizzies", quizSchema);

module.exports = {
  Quiz,
};
