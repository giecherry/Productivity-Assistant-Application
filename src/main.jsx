import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { EventContextProvider } from "./components/EventCalendar-components/EventContext";
import { UserContextProvider } from './components/UserContext.jsx'
import { HabitCounterContextProvider } from './context/Habit-context/HabitCounterContext.jsx'
import { DeleteHabitContextProvider } from './context/Habit-context/DeleteHabitContext.jsx'
import { HabitFiltSortContextProvider } from './context/Habit-context/HabitFiltSortContext.jsx'

import {TodoContextProvider} from './components/Todos-components/TodosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <HabitFiltSortContextProvider>
        <DeleteHabitContextProvider>
          <HabitCounterContextProvider>
            <EventContextProvider>
              <TodoContextProvider>
                <BrowserRouter>    
                  <App />
                </BrowserRouter>
              </TodoContextProvider>
            </EventContextProvider>
          </HabitCounterContextProvider>
        </DeleteHabitContextProvider>
      </HabitFiltSortContextProvider>
      </UserContextProvider>
  </StrictMode>,
)
