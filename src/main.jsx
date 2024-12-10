import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HabitCounterContextProvider } from './context/Habit-context/HabitCounterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HabitCounterContextProvider>
      <BrowserRouter>    
        <App />
      </BrowserRouter>
    </HabitCounterContextProvider>
  </StrictMode>,
)
