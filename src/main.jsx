import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { EventContextProvider } from "./components/EventCalendar-components/EventContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventContextProvider>
      <BrowserRouter>    
        <App />
      </BrowserRouter>
      </EventContextProvider>
  </StrictMode>,
)
