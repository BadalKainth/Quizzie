const mongoose = require("mongoose");

const impressionSchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.ObjectId,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
  },
  count: {
    type: Number,
  },
});
const Impression = mongoose.model("impressions", impressionSchema);

module.exports = {
  Impression,
};
