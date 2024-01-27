require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const AuthRouter = require("./routes/auth");
const QuizRouter = require("./routes/quiz");
const { HTTPError } = require("./utils/error");
const { ZodError } = require("zod");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json()); // I

app.use(AuthRouter);
app.use("/quiz", QuizRouter);

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send(err.message);
  }
  if (err instanceof HTTPError) {
    res.status(err.statusCode).send({
      message: err.message,
    });
  }
  if (err instanceof ZodError) {
    res.status(400).send(err);
  } else {
    next(err);
  }
});

async function main() {
  if (!process.env.MONGODB_URI)
    throw new Error("MongoDB Conneection string is missing");

  // Connect to mongodb database
  await mongoose.connect(process.env.MONGODB_URI);

  // Start express server on [PORT]

  app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
}

process.on("SIGTERM", async () => {
  console.log("Closing database");
  await mongoose.disconnect();
});

main();
