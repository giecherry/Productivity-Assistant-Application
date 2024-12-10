import { createContext, useState } from "react";

export const HabitCounterContext = createContext();

export function HabitCounterContextProvider ({children}) {

    const [counter, setCounter] = useState(0);

    return (
        <>
            <HabitCounterContext.Provider value={{counter,increment}}>
                {children}
            </HabitCounterContext.Provider>
        </>
    )
}