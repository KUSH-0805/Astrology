import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [backendMessage, setBackendMessage] = useState('Connecting to backend...')
  const [error, setError] = useState('')

  useEffect(() => {
    // Fetch the health check endpoint from our Django backend
    fetch('http://localhost:8000/api/health/')
      .then((response) => response.json())
      .then((data) => setBackendMessage(data.message))
      .catch(() => setError('Could not reach the backend. Is Django running?'))
  }, [])

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-deep-black text-soft-white">
      <h1 className="font-heading text-4xl md:text-5xl text-gold mb-4">
        House of Astrology
      </h1>
      <p className="text-lg md:text-xl px-8 py-4 rounded-lg bg-charcoal border border-gold/30 text-soft-white">
        {error ? (
          <span className="text-red-400">{error}</span>
        ) : (
          backendMessage
        )}
      </p>
      <p className="mt-6 text-sm text-soft-white/60 max-w-md">
        This page is React (port 5173) talking to Django (port 8000) — the
        message above comes from the backend!
      </p>
    </div>
    </>
  )
}

export default App