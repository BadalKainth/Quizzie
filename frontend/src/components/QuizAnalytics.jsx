import classes from './QuizAnalytics.module.css'

function QuizAnalytics({
  index,
  name,
  createdAt = Date.now(),
  impressions = 0,
}) {
  return (
    <div className={classes.QuizAnalytics}>
      <h3>{index}</h3>
      <h3>{name}</h3>
      <h3>{new Date(createdAt).toLocaleDateString()}</h3>
      <h3>{impressions}</h3>
      <h3>Hello</h3>
      <h3>Hello</h3>
    </div>
  )
}
export default QuizAnalytics
