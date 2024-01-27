import classes from "./TrendingCards.module.css";

function TrendingCards() {
  return (
    <div className={classes.TrendingCard}>
      <div className={classes.TrendingOn}>
        <h3>Quiz 1</h3> <span>667👁️</span>
      </div>
      <p>Created on: 04 Sept, 2023</p>
    </div>
  );
}

export default TrendingCards;
