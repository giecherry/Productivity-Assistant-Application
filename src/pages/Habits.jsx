import { useEffect, useState, useContext } from "react";
import CreateNewHabit from "../components/Habit-components/CreateNewHabit"
import { HabitCounterContext } from "/src/context/Habit-context/HabitCounterContext";
import HabitFiltSort from "../components/Habit-components/HabitFiltSort";
import HabitCSS from "../components/Habit-components/Habit.module.css";
import LogOutBtn from "../components/HomePage-components/LogOutBtn"

const Habits = () => {
    
    let {increment, reduce, zero, reset, habits, AddHabits} = useContext(HabitCounterContext)
    const [filterHabits, setFilterHabits] = useState(habits);

    useEffect(() => {
            console.log("Save habit in localStorage")
            localStorage.setItem("habit", JSON.stringify(habits))
        }, [habits])

    return (
        <>
            <div className={HabitCSS.HabitHome}>
                <h1 className={HabitCSS.HabitHOne}>Habits</h1>
                <CreateNewHabit />
                <HabitFiltSort />   
                

                <div>  
                    <ul>
                        {habits.map((habits) => (
                            <li key={habits.id}>        
                                <h3>Habit: {habits.title}</h3>
                                <p><strong>Repeat:</strong> {habits.repeat}</p>
                                <p><strong>Priority:</strong> {habits.priority}</p>
                                <p><strong>Count your repetitions</strong> {habits.counter}</p>
                                <button className={HabitCSS.HabitButton} onClick={() => increment(habits.id, habits)}>+</button>
                                <button className={HabitCSS.HabitButton} onClick={() => reduce(habits.id, habits)}>-</button>
                                <button className={HabitCSS.HabitButton} onClick={() => zero(habits.id, habits)}>Reset counter</button>
                                <button className={HabitCSS.HabitButton}onClick={() => reset(habits.id, habits)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={HabitCSS.OutButton}><LogOutBtn /></div>
        </>
    )
}

export default Habits

