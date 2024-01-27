import { useState } from "react";
import classes from "./CreateQuizModal.module.css";

export default function CreateQuizModal() {
  const [quizType, setQuizType] = useState("poll");

  const [currentStep, setCurrentStep] = useState(0);

  event.preventDefault();
  return (
    <>
      {currentStep === 0 && (
        <div className={classes.CreateQuizModal}>
          <input type="text" />
          <div className={classes.TypeSelector}>
            <p>Quiz Type</p>
            <div className={classes.RadioToolbar}>
              <input
                type="radio"
                id="qna-btn"
                name="quizType"
                value="qna"
                checked={quizType === "qna"}
                onChange={(e) => setQuizType(e.target.value)}
              />
              <label for="qna-btn" onClick={() => setQuizType("qna")}>
                Q&A
              </label>

              <input
                type="radio"
                id="poll-btn"
                name="quizType"
                value="poll"
                checked={quizType === "poll"}
                onChange={(e) => setQuizType(e.target.value)}
              />
              <label for="poll-btn" onClick={() => setQuizType("poll")}>
                Poll
              </label>
            </div>
          </div>
          <div className={classes.FormBtns}>
            <button className={classes.FormBtn}> Cancel</button>
            <button
              className={classes.FormBtn}
              onClick={() => setCurrentStep(1)}
            >
              Continue
            </button>
          </div>
        </div>
      )}
      {currentStep === 1 && (
        <div className={classes.CreateQuizForm}>
          <div className={classes.QuizCounter}>
            <div>
              <button className={classes.QuizCountBtn}>1</button>
            </div>
            <span>Max 5 questions</span>
          </div>
          <input
            type="text"
            placeholder="Q & A Question"
            className={classes.QuizInput}
          />
          <div className={classes.QuizTypeSelector}>
            <span>Option Type</span>
            <div>
              <input
                type="radio"
                id="text-btn"
                name="optionType"
                value="Text"
              />
              <label for="text-btn">Text</label>
            </div>
            <div>
              <input
                type="radio"
                id="image-btn"
                name="optionType"
                value="Image"
              />
              <label for="image-btn">Image URL</label>
            </div>
            <div>
              <input
                type="radio"
                id="textImage-btn"
                name="optionType"
                value="TextImage"
              />
              <label for="textImage-btn">Text & Image URL</label>
            </div>
          </div>
          <div className={classes.QuizOptions}>
            <div className={classes.OptionArea}>
              <div>
                <input
                  type="radio"
                  id="option1-btn"
                  name="optionType"
                  value="Text"
                />
                <label for="option1-btn" className={classes.OptionBtn}>
                  Text
                </label>
              </div>
            </div>
            <div className={classes.TimerArea}>
              <span>Timer</span>
              <div className={classes.RadioToolbar}>
                <input
                  type="radio"
                  id="timerOff-btn"
                  name="timerType"
                  value="TimerOff"
                />
                <label for="timerOff-btn" style={{ fontSize: "0.9rem" }}>
                  OFF
                </label>
              </div>
              <div className={classes.RadioToolbar}>
                <input
                  type="radio"
                  id="5secTimer-btn"
                  name="timerType"
                  value="5secTimer"
                />
                <label for="5secTimer-btn" style={{ fontSize: "0.9rem" }}>
                  5 sec
                </label>
              </div>
              <div className={classes.RadioToolbar}>
                <input
                  type="radio"
                  id="10secTimer-btn"
                  name="timerType"
                  value="10secTimer"
                />
                <label for="10secTimer-btn" style={{ fontSize: "0.9rem" }}>
                  10 sec
                </label>
              </div>
            </div>
          </div>
          <div className={classes.QuizBtns}>
            <button className={classes.CancelBtn}> Cancel</button>
            <button className={classes.ContinueBtn}>Create Quiz</button>
          </div>
        </div>
      )}
    </>
  );
}
