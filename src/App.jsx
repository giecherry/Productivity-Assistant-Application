import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodosAndActivities from './pages/TodosAndActivities'
import Habits from './pages/Habits'
import EventCalendar from './pages/EventCalendar'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/todo=:id" element={<TodosAndActivities />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/calendar" element={<EventCalendar />} />
        <Route path="/random" element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
