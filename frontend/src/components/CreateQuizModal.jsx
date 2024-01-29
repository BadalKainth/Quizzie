import { useState } from 'react'
import classes from './CreateQuizModal.module.css'
import { createQuiz } from '../api/quiz'

const sanitize = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) => {
      return value === '' ? undefined : value
    })
  )
}

function createQuestionObject() {
  return {
    text: '',
    type: 'text',
    maxTime: 0,
    correctOption: 0,
    options: [
      {
        text: '',
        url: '',
      },
      {
        text: '',
        url: '',
      },
    ],
  }
}

export default function CreateQuizModal({ closeModal }) {
  const [quiz, setQuiz] = useState({
    name: '',
    type: 'poll',
    questions: [createQuestionObject()],
  })

  function addQuestion() {
    if (quiz.questions.length < 5) {
      setQuiz({
        ...quiz,
        questions: [...quiz.questions, createQuestionObject()],
      })
    }
  }

  function removeQuestion() {
    if (quiz.questions.length > 1) {
      if (currentIndex === quiz.questions.length - 1) {
        setCurrentIndex(currentIndex - 1)
      }
      setQuiz({
        ...quiz,
        questions: quiz.questions.slice(0, -1),
      })
    }
  }

  function addQuestionOption() {
    if (currentQuestion.options.length < 4) {
      const updatedQuestions = quiz.questions.map((question, index) => {
        if (index === currentIndex) {
          return {
            ...question,
            options: [...question.options, { text: '', url: '' }],
          }
        }
        return question
      })
      setQuiz({
        ...quiz,
        questions: updatedQuestions,
      })
    }
  }

  //   function removeQuestionOption() {
  //     if (currentQuestion.options.length > 2) {
  //       const updatedQuestions = quiz.questions.map((question, index) => {
  //         if (index === currentIndex) {
  //           return {
  //             ...question,
  //             options: question.options.slice(0, -1),
  //           }
  //         }
  //         return question
  //       })
  //       setQuiz({
  //         ...quiz,
  //         questions: updatedQuestions,
  //       })
  //     }
  //   }

  function setQuestionValue(key, value) {
    const updatedQuestions = quiz.questions.map((question, index) => {
      if (index === currentIndex) {
        return {
          ...question,
          [key]: value,
        }
      }
      return question
    })

    setQuiz({
      ...quiz,
      questions: updatedQuestions,
    })
  }

  function setQuestionOptionValue(optionIndex, key, value) {
    const updatedQuestions = quiz.questions.map((question, index) => {
      if (index === currentIndex) {
        return {
          ...question,
          options: question.options.map((option, index) => {
            if (index === optionIndex) {
              return {
                ...option,
                [key]: value,
              }
            }
            return option
          }),
        }
      }
      return question
    })

    setQuiz({
      ...quiz,
      questions: updatedQuestions,
    })
  }

  const [currentIndex, setCurrentIndex] = useState(0)

  const currentQuestion = quiz.questions[currentIndex]

  const [currentStep, setCurrentStep] = useState(0)

  async function handleSubmit(e) {
    e.preventDefault()
    if (currentStep === 0) {
      setCurrentStep(1)
    } else {
      const response = await createQuiz(sanitize(quiz))
      console.log(response)
      closeModal()
    }
  }

  return (
    <>
      {currentStep === 0 && (
        <form className={classes.CreateQuizModal} onSubmit={handleSubmit}>
          <p>Quiz name</p>
          <input
            type="text"
            name="quizName"
            value={quiz.name}
            onChange={(e) =>
              setQuiz({
                ...quiz,
                name: e.target.value,
              })
            }
            required
          />
          <div className={classes.TypeSelector}>
            <p>Quiz Type</p>
            <div className={classes.RadioToolbar}>
              <input
                type="radio"
                id="qna-btn"
                name="quizType"
                value="qna"
                checked={quiz.type === 'qna'}
                onChange={(e) =>
                  setQuiz({
                    ...quiz,
                    type: e.target.value,
                  })
                }
              />
              <label
                htmlFor="qna-btn"
                onClick={() =>
                  setQuiz({
                    ...quiz,
                    type: 'qna',
                  })
                }
              >
                Q&A
              </label>

              <input
                type="radio"
                id="poll-btn"
                name="quizType"
                value="poll"
                checked={quiz.type === 'poll'}
                onChange={(e) =>
                  setQuiz({
                    ...quiz,
                    type: e.target.value,
                  })
                }
              />
              <label
                htmlFor="poll-btn"
                onClick={() =>
                  setQuiz({
                    ...quiz,
                    type: 'poll',
                  })
                }
              >
                Poll
              </label>
            </div>
          </div>
          <div className={classes.FormBtns}>
            <button className={classes.FormBtn} onClick={closeModal}>
              Cancel
            </button>
            <button className={classes.FormBtn} type="submit">
              Continue
            </button>
          </div>
        </form>
      )}
      {currentStep === 1 && (
        <form className={classes.CreateQuizForm} onSubmit={handleSubmit}>
          <div className={classes.QuizCounter}>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              {quiz.questions.map((_, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                  }}
                >
                  <button
                    className={classes.QuizCountBtn}
                    style={{
                      backgroundColor:
                        index === currentIndex ? '#4CAF50' : '#E0E0E0',
                      color: index === currentIndex ? '#fff' : '#000',
                    }}
                    onClick={() => setCurrentIndex(index)}
                  >
                    {index + 1}
                  </button>
                  {index !== 0 && (
                    <button
                      className={classes.RemoveBtn}
                      onClick={removeQuestion}
                      style={{
                        backgroundColor:
                          index === currentIndex ? '#4CAF50' : '#E0E0E0',
                        color: index === currentIndex ? '#fff' : '#000',
                      }}
                    >
                      -
                    </button>
                  )}
                </div>
              ))}
              {quiz.questions.length < 5 && (
                <button onClick={addQuestion}>Add+</button>
              )}
            </div>
            <span>Max 5 questions</span>
          </div>
          <input
            type="text"
            placeholder="Q & A Question"
            value={quiz.questions[currentIndex].text}
            onChange={(e) => setQuestionValue('text', e.target.value)}
            className={classes.QuizInput}
            required
          />
          <div className={classes.QuizTypeSelector}>
            <span>Option Type</span>
            <div>
              <input
                type="radio"
                id="text-btn"
                name="optionType"
                value="text"
                checked={currentQuestion.type === 'text'}
                onChange={() => setQuestionValue('type', 'text')}
              />
              <label
                htmlFor="text-btn"
                onClick={() => setQuestionValue('type', 'text')}
              >
                Text
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="image-btn"
                name="optionType"
                value="url"
                checked={currentQuestion.type === 'url'}
                onChange={() => setQuestionValue('type', 'url')}
              />
              <label
                htmlFor="image-btn"
                onClick={() => setQuestionValue('type', 'url')}
              >
                Image URL
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="textImage-btn"
                name="optionType"
                value="both"
                checked={currentQuestion.type === 'both'}
                onChange={() => setQuestionValue('type', 'both')}
                onClick={() => setQuestionValue('type', 'both')}
              />
              <label htmlFor="textImage-btn">Text & Image URL</label>
            </div>
          </div>
          <div className={classes.QuizOptions}>
            <div className={classes.OptionArea}>
              {currentQuestion.options.map((option, index) => (
                <div key={index} className={classes.OptionArea}>
                  <div key={index} className={classes.Option}>
                    {currentQuestion.type !== 'url' && (
                      <input
                        type="text"
                        placeholder={`Option ${index + 1}`}
                        value={option.text}
                        onChange={(e) =>
                          setQuestionOptionValue(index, 'text', e.target.value)
                        }
                        required
                      />
                    )}
                    {currentQuestion.type !== 'text' && (
                      <input
                        type="url"
                        placeholder="Image URL"
                        value={option.url}
                        onChange={(e) =>
                          setQuestionOptionValue(index, 'url', e.target.value)
                        }
                        required
                      />
                    )}
                  </div>
                </div>
              ))}
              {currentQuestion.options.length < 4 && (
                <button onClick={addQuestionOption}>Add option</button>
              )}
            </div>
            <div className={classes.TimerArea}>
              <span>Timer</span>
              <div className={classes.RadioToolbar}>
                <input
                  type="radio"
                  id="timerOff-btn"
                  name="timerType"
                  value={0}
                  checked={currentQuestion.maxTime === 0}
                  onChange={() => setQuestionValue('maxTime', 0)}
                />
                <label htmlFor="timerOff-btn" style={{ fontSize: '0.9rem' }}>
                  OFF
                </label>
              </div>
              <div className={classes.RadioToolbar}>
                <input
                  type="radio"
                  id="5secTimer-btn"
                  name="timerType"
                  value={300}
                  checked={currentQuestion.maxTime === 300}
                  onChange={() => setQuestionValue('maxTime', 300)}
                />
                <label htmlFor="5secTimer-btn" style={{ fontSize: '0.9rem' }}>
                  5 sec
                </label>
              </div>
              <div className={classes.RadioToolbar}>
                <input
                  type="radio"
                  id="10secTimer-btn"
                  name="timerType"
                  value={600}
                  checked={currentQuestion.maxTime === 600}
                  onChange={() => setQuestionValue('maxTime', 600)}
                />
                <label htmlFor="10secTimer-btn" style={{ fontSize: '0.9rem' }}>
                  10 sec
                </label>
              </div>
            </div>
          </div>
          <div className={classes.QuizBtns}>
            <button className={classes.CancelBtn} onClick={closeModal}>
              Cancel
            </button>
            <button className={classes.ContinueBtn} type="submit">
              Create Quiz
            </button>
          </div>
        </form>
      )}
    </>
  )
}
