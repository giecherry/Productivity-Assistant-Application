import { createContext, useEffect, useState } from "react";

export const HabitCounterContext = createContext();

export function HabitCounterContextProvider ({children}) {

    const [counter, setCounter] = useState(1);
    const [habits, setHabits] = useState(() => {
        const savedHabits = localStorage.getItem("habit");
        return savedHabits ? JSON.parse(savedHabits) : [];
});

    useEffect(() => {
        console.log("Save habit in localStorage")
        localStorage.setItem("habit", JSON.stringify(habits));
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

        setHabits((prevHabits) => [...prevHabits, newHabit]);
    }

    const increment = (id) => {
        setHabits((prevHabits) =>
            prevHabits.map((habit) =>
                habit.id === id ? { ...habit, counter: habit.counter + 1 } : habit
            )
        );
    };

    const reduce = (id) => {
        setHabits((prevHabits) =>
            prevHabits.map((habit) =>
                habit.id === id ? { ...habit, counter: habit.counter - 1 } : habit
            )
        );
    };

    const zero = (id) => {
        setHabits((prevHabits) =>
            prevHabits.map((habit) =>
                habit.id === id ? { ...habit, counter: 0 } : habit
            )
        );
    };

    const reset = (id) => {
        setHabits((prevHabits) =>
            prevHabits.filter((habit) => habit.id !== id)
        );
    };

    return (
        <>
            <HabitCounterContext.Provider value={{counter, increment, reduce, zero, reset, habits, AddHabit}}>
                {children}
            </HabitCounterContext.Provider>
        </>
    )
} 