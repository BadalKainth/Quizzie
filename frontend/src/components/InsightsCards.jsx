import classes from './insightsCards.module.css'

function InsightsCards({ name, count }) {
  return (
    <div className={classes.InsightCard}>
      <h3>{count}</h3> <span>{name}</span>
    </div>
  )
}

export default InsightsCards
