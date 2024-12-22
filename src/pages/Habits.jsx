import { useEffect, useState, useContext } from "react";
import CreateNewHabit from "../components/Habit-components/CreateNewHabit"
import { HabitCounterContext } from "/src/context/Habit-context/HabitCounterContext";
import HabitFiltSort from "../components/Habit-components/HabitFiltSort";
import HabitCSS from "../components/Habit-components/Habit.module.css";
import LogOutBtn from "../components/HomePage-components/LogOutBtn"
import { Link } from "react-router-dom";
import HabitList from "../components/Habit-components/HabitList";

const Habits = () => {
    
    let {habits} = useContext(HabitCounterContext)
    const [habitFilter, setHabitFilter] = useState(habits);

    useEffect(() => {
            console.log("Save habit in localStorage")
            localStorage.setItem("habit", JSON.stringify(habits))
        }, [habits])

    return (
        <>
            <div className={HabitCSS.HabitHome}>
                <h1 className={HabitCSS.HabitHOne}>Habits</h1>
                <CreateNewHabit />
                <HabitFiltSort onFilterChange={setHabitFilter} />  
                <HabitList filter={habitFilter}/> 
            </div>
            <Link to="/home"><button>&#8592;</button></Link>
            <div className={HabitCSS.OutButton}><LogOutBtn /></div>
        </>
    )
}

export default Habits

