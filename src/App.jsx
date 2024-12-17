import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodosAndActivities from './pages/TodosAndActivities'
import Habits from './pages/Habits'
import EventCalendar from './pages/EventCalendar'
import LogIn from './pages/LogIn'
import CreateNewHabit from './components/Habit-components/CreateNewHabit'
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
<<<<<<< HEAD
        <Route path="/createNewHabit" element={<CreateNewHabit />} />
=======
        <Route path="/random" element={<HomePage/>}/>
>>>>>>> 71450728a6c6c72fa4f7d755e5a7a2adc38f73db
      </Routes>
    </>
  )
}

export default App
