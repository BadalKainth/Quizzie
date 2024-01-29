import axios from 'axios'

export async function login(email, password) {
  try {
    const response = await axios.post('/login', {
      email,
      password,
    })
    return response.data
  } catch (error) {
    const message = error.response.data.message || 'Authentication failed'
    throw Error(message)
  }
}

export async function register(name, email, password) {
  try {
    const response = await axios.post('/register', {
      name,
      email,
      password,
    })
    return response.data
  } catch (error) {
    const message = error.response.data.message || 'Authentication failed'
    throw Error(message)
  }
}
