<<<<<<< HEAD
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodosAndActivities from "./pages/TodosAndActivities";
import Habits from "./pages/Habits";
import EventCalendar from "./pages/EventCalendar";
import LogIn from "./pages/LogIn";
=======
import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodosAndActivities from './pages/TodosAndActivities'
import Habits from './pages/Habits'
import EventCalendar from './pages/EventCalendar'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

>>>>>>> origin/main

function App() {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<LogIn />} />
=======
        <Route path="/" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
>>>>>>> origin/main
        <Route path="/home" element={<HomePage />} />
        <Route path="/todo" element={<TodosAndActivities />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/calendar" element={<EventCalendar />} />
        <Route path="/random" element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
