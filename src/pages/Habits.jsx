import { useEffect, useState, useContext } from "react";
import CreateNewHabit from "../components/Habit-components/CreateNewHabit"
import { HabitCounterContext } from "/src/context/Habit-context/HabitCounterContext";
import HabitFiltSort from "../components/Habit-components/HabitFiltSort";
import HabitCSS from "../components/Habit-components/Habit.module.css"

const Habits = () => {
    
    let {increment, reduce, zero, reset, habits, AddHabits} = useContext(HabitCounterContext)
    const [filterHabits, setFilterHabits] = useState(habits);

    useEffect(() => {
            console.log("Save habit in localStorage")
            localStorage.setItem("habit", JSON.stringify(habits))
        }, [habits])

    return (
        <>
            <div className="HabitHome">
                <h1 className="HabitHOne">Habits</h1>
                <CreateNewHabit />
                <HabitFiltSort />   

                <div>  
                    <ul>
                        {habits.map((habits) => (
                            <li key={habits.id}>        
                                <h3>Habit: {habits.title}</h3>
                                <p>Repeat: {habits.repeat}</p>
                                <p>Priority: {habits.priority}</p>
                                <p>Count your repetitions {habits.counter}</p>
                                <button className="HabitButton" onClick={() => increment(habits.id, habits)}>+</button>
                                <button className="HabitButton" onClick={() => reduce(habits.id, habits)}>-</button>
                                <button className="HabitButton" onClick={() => zero(habits.id, habits)}>Reset counter</button>
                                <button className="HabitButton"onClick={() => reset(habits.id, habits)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Habits

