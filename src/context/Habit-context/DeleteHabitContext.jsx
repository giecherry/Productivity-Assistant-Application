import { createContext } from "react";

export const DeleteHabitContext = createContext();

export function DeleteHabitContextProvider ({children}) {

    const reset = (habits, setHabits, habitToDelete) => {
        const updatedHabits = habits.filter((habit) => habit.id !== habitToDelete.id);
        setHabits(updatedHabits);
    };

    return (
        <>
            <DeleteHabitContext.Provider value={{reset}}>
                {children}
            </DeleteHabitContext.Provider>
        </>
    )
}