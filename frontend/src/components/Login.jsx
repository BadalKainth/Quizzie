import { useState } from 'react'
import { useAuth } from '../hooks/auth'
import classes from './Login.module.css'
import { login } from '../api/auth'
import { parseJwt } from '../utils/jwt'

function Login() {
  const { setUser } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    try {
      const response = await login(email, password)
      const payload = parseJwt(response.accessToken)
      localStorage.setItem('accessToken', response.accessToken)
      setUser({
        ...response,
        ...payload,
      })
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <form className={classes.FormInputs} onSubmit={handleSubmit}>
      {error && <p className={classes.Error}>{error}</p>}
      <div className={classes.LogInCardContainer}>
        <div className={classes.FormLabels}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={classes.FormLabels}>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <button className={classes.RegisterBtn}>LogIn</button>
    </form>
  )
}

export default Login
