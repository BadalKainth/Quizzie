const { z } = require("zod");

const optionInput = z.object({
  text: z.string().optional(),
  url: z.string().url().optional(),
  maxTime: z.number().optional(),
});

const questionInput = z.object({
  text: z.string(),
  type: z.string(),
  correctOption: z.number(),
  options: z.array(optionInput),
});

const createQuizInput = z.object({
  name: z.string(),
  type: z.string(),
  questions: z.array(questionInput),
});

module.exports = {
  createQuizInput,
};
