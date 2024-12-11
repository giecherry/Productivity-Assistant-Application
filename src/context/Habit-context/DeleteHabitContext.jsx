import { createContext, useState } from "react";
import Habits from "../../pages/Habits";

export const DeleteHabitContext = createContext();

export function DeleteHabitContextProvider ({children}) {

    const [deleteHabit, setDeleteHabit] = useState();

    const deleteThisHabit = (i) => {
        let updatedHabits = Habits.filter((habit,i) => {return i !== index})
    deleteHabit(setDeleteHabit);
    }

    return (
        <>
            <DeleteHabitContext.Provider value={{deleteHabit,increment}}>
                {children}
            </DeleteHabitContext.Provider>
        </>
    )
}