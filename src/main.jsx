import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './assets/pages/Container.jsx'
import './index.css'

createRoot(document.getElementById('board')).render(
  <StrictMode>
    <Container />
  </StrictMode>,
)
