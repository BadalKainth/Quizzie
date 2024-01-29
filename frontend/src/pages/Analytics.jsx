import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import QuizAnalytics from '../components/QuizAnalytics'
import classes from './Analytics.module.css'
import { getQuizzes } from '../api/quiz'

function Analytics() {
  const [quizData, setQuizData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const quizzes = await getQuizzes()
      setQuizData(quizzes)
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <div className={classes.AnalyticsTable}>
        <h1 style={{ color: 'blue' }}>Quiz Analysis</h1>
        <br />
        <div className={classes.QuizHeaders}>
          <h3>S.No</h3>
          <h3>Quiz Name</h3>
          <h3>Created on</h3>
          <h3>Impressions</h3>
          <h3>Hello</h3>
          <h3>Hello</h3>
        </div>
        {quizData.map((quiz, index) => (
          <QuizAnalytics
            key={quiz._id}
            index={index + 1}
            name={quiz.name}
            createdAt={quiz.createdAt}
            impressions={quiz.impressions}
          />
        ))}
      </div>
    </Layout>
  )
}
export default Analytics
