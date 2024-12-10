import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodosAndActivities from "./pages/TodosAndActivities";
import Habits from "./pages/Habits";
import EventCalendar from "./pages/EventCalendar";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/todo" element={<TodosAndActivities />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/calendar" element={<EventCalendar />} />
      </Routes>
    </>
  );
}

export default App;
