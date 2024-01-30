import classes from './QuizInterface.module.css'

function QuizInterface() {
  return (
    <div className={classes.QuizInterfaceScreen}>
      <div className={classes.CountTimer}>
        <p className={classes.Date}>01/04</p>
        <p className={classes.Timer}>00:10s</p>
      </div>
      <div className={classes.Questions}>
        <h2>Your question text comes here, its a sample text.</h2>
      </div>
      <div className={classes.QuizOptions}>
        <div className={classes.QuizOption}>
          <button className={classes.OptionBtn}>Option 1</button>
          <button className={classes.OptionBtn}>Option 1</button>
        </div>
        <div className={classes.QuizOption}>
          <button className={classes.OptionBtn}>Option 1</button>
          <button className={classes.OptionBtn}>Option 1</button>
        </div>
      </div>
      <button className={classes.NextQuizBtn}>Next</button>
    </div>
  )
}
export default QuizInterface
