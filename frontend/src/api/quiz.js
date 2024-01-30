import axios from 'axios'

export async function getQuizzes() {
  const response = await axios.get('/quiz')
  return response.data
}

export async function getTrendingQuizzes() {
  const response = await axios.get('/quiz/trending')
  return response.data
}

export async function getQuiz(id) {
  const response = await axios.get(`/quiz/${id}`)
  return response.data
}

export async function getQuizStats() {
  const response = await axios.get('/quiz/stats')
  return response.data
}

export async function getQuizImpressions(id) {
  const response = await axios.get(`/quiz/${id}/impression`)
  return response.data
}

export async function incrementQuizImpressions(id) {
  const response = await axios.post(`/quiz/${id}/impression`)
  return response.data
}

export async function getQuizAnalytics(id) {
  const response = await axios.get(`/quiz/${id}/analytics`)
  return response.data
}

export async function createQuizAnalytics(id, analytics) {
  const response = await axios.post(`/quiz/${id}/analytics`, analytics)
  return response.data
}

export async function createQuiz(quiz) {
  const response = await axios.post('/quiz', quiz)
  return response.data
}

export async function updateQuiz(quiz) {
  const response = await axios.put(`/quiz/${quiz.id}`, quiz)
  return response.data
}

export async function deleteQuiz(id) {
  const response = await axios.delete(`/quiz/${id}`)
  return response.data
}
