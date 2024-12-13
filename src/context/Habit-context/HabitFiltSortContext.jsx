import { createContext, useState } from "react";

export const HabitFiltSortoContext = createContext();

export function HabitFiltSortoContextProvider ({children}) {

    const [sortHabits, setSortHabits] = useState('');
    const [filterHabits, setFilterHabits] = useState('')

    return (
        <>
            <HabitFiltSortoContext.Provider value={{sortHabits}}>
                {children}
            </HabitFiltSortoContext.Provider>
        </>
    )
}