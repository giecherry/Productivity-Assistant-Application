import { createContext, useState } from "react";

export const HabitCounterContext = createContext();

export function HabitCounterContextProvider ({children}) {

    const [counter, setCounter] = useState(1);

    const increment = () => {
         setCounter(counter+1);
    }

    return (
        <>
            <HabitCounterContext.Provider value={{counter,increment}}>
                {children}
            </HabitCounterContext.Provider>
        </>
    )
}