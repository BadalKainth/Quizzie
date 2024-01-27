import InsightsCards from "../components/InsightsCards";
import TrendingCards from "../components/TrendingCards";
import NavBar from "../components/Navbar";
import classes from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={classes.DashboardScreen}>
      <NavBar />
      <div className={classes.Dashboard}>
        <div className={classes.InsightsCards}>
          <InsightsCards />
          <InsightsCards />
          <InsightsCards />
        </div>
        <div className={classes.TrendingCardSection}>
          <h2>Trending Quizs</h2>
          <div className={classes.TrendingCards}>
            <TrendingCards />
            <TrendingCards />
            <TrendingCards />
            <TrendingCards />
          </div>
          <div className={classes.TrendingCards}>
            <TrendingCards />
            <TrendingCards />
            <TrendingCards />
            <TrendingCards />
          </div>
          <div className={classes.TrendingCards}>
            <TrendingCards />
            <TrendingCards />
            <TrendingCards />
            <TrendingCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
