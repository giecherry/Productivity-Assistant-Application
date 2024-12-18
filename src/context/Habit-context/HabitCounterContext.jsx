import { createContext, useState } from "react";

export const HabitCounterContext = createContext();

export function HabitCounterContextProvider ({children}) {

    const [counter, setCounter] = useState(1);

    /* const increment = () => {
         setCounter(counter+1);
    }

    const reduce = () => {
         setCounter(counter-1);
    }
    
    const  zero = () => {
        setCounter(counter===0);
    } */

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
            <HabitCounterContext.Provider value={{counter,increment,reduce,zero,reset}}>
                {children}
            </HabitCounterContext.Provider>
        </>
    )
}