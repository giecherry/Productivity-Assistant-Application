import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HabitCounterContextProvider } from './context/Habit-context/HabitCounterContext.jsx'
import { DeleteHabitContextProvider } from './context/Habit-context/DeleteHabitContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DeleteHabitContextProvider>
    <HabitCounterContextProvider>
      <BrowserRouter>    
        <App />
      </BrowserRouter>
    </HabitCounterContextProvider>
    </DeleteHabitContextProvider>
  </StrictMode>,
)
