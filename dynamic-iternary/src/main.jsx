import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Trip from './Trip.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Trip />
  </StrictMode>,
)
