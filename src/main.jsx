import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Board from './assets/components/Board/Board'
import './index.css'

createRoot(document.getElementById('board')).render(
  <StrictMode>
    <Board />
  </StrictMode>,
)
