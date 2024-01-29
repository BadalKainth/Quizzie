import classes from './TrendingCards.module.css'

function TrendingCards({ name, count, createdAt }) {
  return (
    <div className={classes.TrendingCard}>
      <div className={classes.TrendingOn}>
        <h3>{name}</h3> <span>{count}👁️</span>
      </div>
      <p>Created on: {new Date(createdAt).toLocaleDateString()}</p>
    </div>
  )
}

export default TrendingCards
