import { useEffect, useState } from 'react'
import InsightsCards from '../components/InsightsCards'
import Layout from '../components/Layout'
import TrendingCards from '../components/TrendingCards'
import classes from './Dashboard.module.css'
import { getQuizStats, getTrendingQuizzes } from '../api/quiz'

function Dashboard() {
  const [quizStats, setQuizStats] = useState(undefined)
  const [trendingQuizzes, setTrendingQuizzes] = useState([])

  useEffect(() => {
    async function fetchData() {
      const [quizStats, quizzes] = await Promise.all([
        getQuizStats(),
        getTrendingQuizzes(),
      ])
      setQuizStats(quizStats)
      setTrendingQuizzes(quizzes)
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <div className={classes.Dashboard}>
        {quizStats && (
          <div className={classes.InsightsCards}>
            <InsightsCards name="Quiz Created" count={quizStats.totalQuizzes} />
            <InsightsCards
              name="Questions Created"
              count={quizStats.totalQuestions}
            />
            <InsightsCards
              name="Total Impressions"
              count={quizStats.totalImpressions}
            />
          </div>
        )}
        <div className={classes.TrendingCardSection}>
          <h2>Trending Quizs</h2>
          <div className={classes.TrendingCards}>
            {trendingQuizzes.map(({ count, quiz }) => (
              <TrendingCards
                key={quiz._id}
                id={quiz._id}
                name={quiz.name}
                createdAt={quiz.createdAt}
                count={count}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
