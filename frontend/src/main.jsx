import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import { AuthProvider } from './contexts/AuthContext.jsx'
import ReactModal from 'react-modal'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

// Add a request interceptor
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')

  config.headers.Authorization = `Bearer ${token}`
  return config
})

ReactModal.setAppElement('#root')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
