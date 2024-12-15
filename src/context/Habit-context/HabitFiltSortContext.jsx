import { createContext, useState } from "react";

export const HabitFiltSortContext = createContext();

export function HabitFiltSortContextProvider ({children}) {

    // const [sortHabits, setSortHabits] = useState('');
    const [filterHabits, setFilterHabits] = useState('')

    return (
        <>
            <HabitFiltSortContext.Provider value={{filterHabits, setFilterHabits}}>
                {children}
            </HabitFiltSortContext.Provider>
        </>
    )
}

