const { z } = require("zod");

const optionInput = z.object({
  text: z.string().optional(),
  url: z.string().url().optional(),
});

const questionInput = z.object({
  text: z.string(),
  type: z.string(),
  maxTime: z.number().optional(),
  correctOption: z.number().optional(),
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
