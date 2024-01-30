import { useState } from 'react'
import classes from './Signup.module.css'
import { useAuth } from '../hooks/auth'
import { login, register } from '../api/auth'
import { parseJwt } from '../utils/jwt'

function Signup() {
  const { setUser } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    try {
      await register(name, email, password)
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
      <div className={classes.SignUpCardContainer}>
        <div className={classes.FormLabels}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div className={classes.FormLabels}>
          <label htmlFor="confirm password">Confirm Password: </label>
          <input
            type="password"
            id="confirm password"
            name="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <button className={classes.RegisterBtn}>Sign-Up</button>
    </form>
  )
}

export default Signup
