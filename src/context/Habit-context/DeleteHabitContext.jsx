import { createContext } from "react";

export const DeleteHabitContext = createContext();

export function DeleteHabitContextProvider ({children}) {

    let reset = (id, habits, setHabits) => {
        const updatedHabits = habits.filter((habit) => habit.id !== id);
        setHabits(updatedHabits);
    }

    return (
        <>
            <DeleteHabitContext.Provider value={{reset}}>
                {children}
            </DeleteHabitContext.Provider>
        </>
    )
}