const express = require("express");
const { Quiz } = require("../models/quiz");
const { Impression } = require("../models/impression");
const { Analytic } = require("../models/analytics");
const { createQuizInput } = require("../schemas/quiz.schema");
const { createAnalyticInput } = require("../schemas/analytic.schema");
const { toObjectId } = require("../utils/objectid");
const { authorizer } = require("../utils/authorizer");

const router = express.Router();

router.post("/", authorizer, async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    const input = createQuizInput.parse(req.body);
    const quiz = await Quiz.create({
      ...input,
      userId: toObjectId(userId),
    });
    res.send(quiz);
  } catch (error) {
    next(error);
  }
});

router.get("/", authorizer, async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    const quizzes = await Quiz.find({
      userId,
    });
    res.send(quizzes);
  } catch (error) {
    next(error);
  }
});

router.get("/trending", authorizer, async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    // Find quizzes with impression greater than 100
    const quizzes = await Impression.aggregate([
      {
        $match: {
          userId: toObjectId(userId),
          count: { $gt: 100 },
        },
      },
      {
        $lookup: {
          from: "quizzies",
          localField: "quizId",
          foreignField: "_id",
          as: "quiz",
        },
      },
      {
        $unwind: "$quiz",
      },
      {
        $project: {
          quiz: 1,
          count: 1,
        },
      },
    ]);
    res.send(quizzes);
  } catch (error) {
    next(error);
  }
});

router.get("/stats", authorizer, async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    const quizzes = await Quiz.find({
      userId,
    });

    const totalQuizzes = quizzes.length;
    const totalQuestions = quizzes.reduce(
      (acc, quiz) => acc + quiz.questions.length,
      0
    );
    const totalImpressions = await Impression.aggregate([
      {
        $match: {
          userId: toObjectId(userId),
        },
      },
      {
        $group: {
          _id: null,
          count: {
            $sum: "$count",
          },
        },
      },
    ]);

    res.send({
      totalQuizzes,
      totalQuestions,
      totalImpressions: totalImpressions[0]?.count || 0,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    res.send(quiz);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/impression", async (req, res, next) => {
  try {
    const impression = await Impression.findOne({ quizId: req.params.id });
    res.send(impression);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/impression", authorizer, async (req, res, next) => {
  try {
    const userId = req.auth.userId;
    const impression = await Impression.findOneAndUpdate(
      {
        quizId: toObjectId(req.params.id),
      },
      {
        $inc: { count: 1 },
        userId: toObjectId(userId),
      },
      {
        upsert: true,
      }
    );
    res.send(impression);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/analytics", async (req, res, next) => {
  try {
    const analytics = await Analytic.find({ quizId: req.params.id });
    res.send(analytics);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/analytics", authorizer, async (req, res, next) => {
  try {
    const input = createAnalyticInput.parse({
      ...req.body,
      quizId: req.params.id,
      userId: req.auth.userId,
    });
    const analytic = await Analytic.create({
      ...input,
      quizId: toObjectId(input.quizId),
      questionId: toObjectId(input.questionId),
      userId: toObjectId(input.userId),
    });
    res.send(analytic);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
