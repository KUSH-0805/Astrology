import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [backendMessage, setBackendMessage] = useState('Connecting to backend...')
  const [error, setError] = useState('')

  useEffect(() => {
    // Fetch the health check endpoint from our Django backend
    fetch('http://localhost:8000/api/health/')
      .then((response) => response.json())
      .then((data) => setBackendMessage(data.message))
      .catch((err) => setError('Could not reach the backend. Is Django running?'))
  }, [])

  return (
    <div className="health-check">
      <h1>House of Astrology</h1>
      <p className="status">
        {error ? <span className="error">{error}</span> : backendMessage}
      </p>
      <p className="hint">
        This page is React (port 5173) talking to Django (port 8000) — the
        message above comes from the backend!
      </p>
    </div>
  )
}

export default App