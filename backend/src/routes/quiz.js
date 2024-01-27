const express = require("express");
const { Quiz } = require("../models/quiz");
const { createQuizInput } = require("../schemas/quiz.schema");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const input = createQuizInput.parse(req.body);
    const quiz = await Quiz.create(input);
    res.send(quiz);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
