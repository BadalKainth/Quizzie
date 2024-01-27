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
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  correctOption: {
    type: Number,
  },
  options: {
    type: [optionSchema],
    required: true,
  },
});

const quizSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  questions: {
    type: [questionSchema],
    required: true,
  },
});

const Quiz = mongoose.model("quizzies", quizSchema);

module.exports = {
  Quiz,
};
