import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HabitCounterContextProvider } from './context/Habit-context/HabitCounterContext.jsx'
import { DeleteHabitContextProvider } from './context/Habit-context/DeleteHabitContext.jsx'
import { HabitFiltSortContextProvider } from './context/Habit-context/HabitFiltSortContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HabitFiltSortContextProvider>
      <DeleteHabitContextProvider>
        <HabitCounterContextProvider>
          <BrowserRouter>    
            <App />
          </BrowserRouter>
        </HabitCounterContextProvider>
      </DeleteHabitContextProvider>
    </HabitFiltSortContextProvider>
import { UserContextProvider } from './components/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>    
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </StrictMode>,
)
