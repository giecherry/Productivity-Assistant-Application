import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './components/UserContext.jsx'
import {TodoContextProvider} from './components/Todos-components/TodosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <TodoContextProvider>
        <BrowserRouter>    
          <App />
        </BrowserRouter>
      </TodoContextProvider>
    </UserContextProvider>
  </StrictMode>,
)
