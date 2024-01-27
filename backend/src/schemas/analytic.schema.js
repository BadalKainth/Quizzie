const { z } = require("zod");

const createAnalyticInput = z.object({
  quizId: z.string(),
  questionId: z.string(),
  userId: z.string(),
  selectedOption: z.number().int().positive(),
});

module.exports = {
  createAnalyticInput,
};
