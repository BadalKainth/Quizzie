import { useEffect, useState } from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'
import classes from './Auth.module.css'
import { useAuth } from '../hooks/auth'
import { useNavigate } from 'react-router-dom'

function Auth() {
  const [authType, setAuthType] = useState('login')
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true })
    }
  }, [user, navigate])

  return (
    <div className={classes.Form}>
      <div className={classes.FormContainer}>
        <h1>QUIZZIE</h1>
        <div className={classes.FormType}>
          <button
            onClick={() => setAuthType('signup')}
            className={classes.SignupBtn}
          >
            Sign Up
          </button>
          <button
            onClick={() => setAuthType('login')}
            className={classes.LoginBtn}
            type="submit"
          >
            Log In
          </button>
        </div>
        {authType === 'signup' ? <Signup /> : <Login />}
      </div>
    </div>
  )
}

export default Auth
