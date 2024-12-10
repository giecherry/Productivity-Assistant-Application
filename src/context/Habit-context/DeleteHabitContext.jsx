import { createContext, useState } from "react";

export const DeleteHabitContext = createContext();

export function DeleteHabitContextProvider ({children}) {

    const [deleteHabit, setDeleteHabit] = useState();

    const increment = () => {
        setDeleteHabit();
    }

    return (
        <>
            <DeleteHabitContext.Provider value={{deleteHabit,increment}}>
                {children}
            </DeleteHabitContext.Provider>
        </>
    )
}