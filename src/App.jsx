import './App.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodosAndActivities />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/eventCalender" element={<EventCalender />} />
      </Routes>
    </>
  )
}

export default App
