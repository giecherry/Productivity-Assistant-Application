import { createContext, useState } from "react";

export const HabitCounterContext = createContext();

export function HabitCounterContextProvider ({children}) {

    const [counter, setCounter] = useState(1);

    const [habits, setHabits] = useState(() => {
        const storedHabits = localStorage.getItem("habit");
        return storedHabits ? JSON.parse(storedHabits) : [];
    });

    const AddHabit = (e) => {
        e.preventDefault();

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

    let increment = (id, habits, setHabits) => {
        setHabits(habits.map(habit => habit.id === id ? {...habit, counter: habit.counter +1} : habit));
    }

    let reduce = (id, habits, setHabits) => {
        setHabits(habits.map(habit => habit.id === id ? {...habit, counter: habit.counter -1} : habit));
    }

    let zero = (id, habits, setHabits) => {
        setHabits(habits.map(habit => habit.id === id ? {...habit, counter: 0} : habit));
    }

    let reset = (id, habits, setHabits) => {
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