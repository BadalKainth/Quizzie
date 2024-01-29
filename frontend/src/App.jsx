import './App.css'
import Auth from './pages/Auth'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import PrivateRoutes from './components/PrivateRoutes'
import { useAuth } from './hooks/auth'
import { useEffect } from 'react'
import { parseJwt } from './utils/jwt'

function App() {
  const { setUser, setIsLoading, isLoading } = useAuth()

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      const payload = parseJwt(accessToken)
      setUser({
        accessToken,
        ...payload,
      })
    }
    setIsLoading(false)
  }, [setUser, setIsLoading])

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route
            path="/"
            element={<Navigate to="/dashboard" replace={true} />}
          />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
        </Routes>
      )}
    </>
  )
}

export default App
