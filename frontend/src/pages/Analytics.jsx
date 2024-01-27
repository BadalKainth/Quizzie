import NavBar from "../components/Navbar";
import QuizAnalytics from "../components/QuizAnalytics";
import classes from "./Analytics.module.css";

function Analytics() {
  return (
    <main className={classes.AnalyticsScreen}>
      <NavBar></NavBar>
      <div className={classes.AnalyticsTable}>
        <h1 style={{ color: "blue" }}>Quiz Analysis</h1>
        <div className={classes.QuizHeaders}>
          <h3>S.No</h3>
          <h3>Quiz Name</h3>
          <h3>Created on</h3>
          <h3>Impressions</h3>
          <h3>Hello</h3>
          <h3>Hello</h3>
        </div>
        <QuizAnalytics />
        <QuizAnalytics />
        <QuizAnalytics />
        <QuizAnalytics />
        <QuizAnalytics />
      </div>
    </main>
  );
}
export default Analytics;
