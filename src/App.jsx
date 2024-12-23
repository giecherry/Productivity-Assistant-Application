import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodosAndActivities from './pages/TodosAndActivities'
import Habits from './pages/Habits'
import EventCalendar from './pages/EventCalendar'
import LogIn from './pages/LogIn'
import NewEvent from './components/EventCalendar-components/NewEvent'
import EventDetails from './components/EventCalendar-components/EventDetails'
import SignUp from './pages/SignUp'
import TodoDetails from  './components/Todos-components/TodoDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/todos" element={<TodosAndActivities />} />
        <Route path="/todos/:id" element={<TodoDetails />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/calendar" element={<EventCalendar />} />
        <Route path="/calendar/newEvent" element={<NewEvent />} />
        <Route path="/calendar/:id" element={<EventDetails />} />
      </Routes>
    </>
  );
}

export default App;
