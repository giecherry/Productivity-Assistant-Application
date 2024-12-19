import { createContext, useEffect, useState } from "react";

export const HabitCounterContext = createContext();

export function HabitCounterContextProvider ({children}) {

    const [counter, setCounter] = useState(1);
    const [habits, setHabits] = useState([]);

  /*   useEffect(() => {
        console.log("Save habit in localStorage")
        const savedHabits = JSON.parse(localStorage.getItem("habit"));
        if (savedHabits) {
            setHabits(savedHabits);
        }
    }, []); */

    useEffect(() => {
        console.log("Save habit in localStorage")
        localStorage.setItem("habit", JSON.stringify(habits))
    }, [habits]);

    const AddHabit = ({title, description, repeat, priority}) => {

        let newHabit = {
            id:Date.now(),
            title,
            description,          
            repeat,
            priority,
            counter:0,
        };

        let updatedHabits = [...habits, newHabit]
        setHabits(updatedHabits)
    }

    let increment = (id) => {
        setHabits(habits.map(habit => habit.id === id ? {...habit, counter: habit.counter +1} : habit));
    }

    let reduce = (id) => {
        setHabits(habits.map(habit => habit.id === id ? {...habit, counter: habit.counter -1} : habit));
    }

    let zero = (id) => {
        setHabits(habits.map(habit => habit.id === id ? {...habit, counter: 0} : habit));
    }

    let reset = (id) => {
        const updatedHabits = habits.filter((habit) => habit.id !== id);
        setHabits(updatedHabits);
    }

    return (
        <>
            <HabitCounterContext.Provider value={{counter, increment, reduce, zero, reset, habits, AddHabit}}>
                {children}
            </HabitCounterContext.Provider>
        </>
    )
}