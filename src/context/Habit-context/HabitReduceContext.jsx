import { createContext, useState } from "react";

export const HabitReduceContext = createContext();

export function HabitReduceContextProvider ({children}) {

    const [reduceCounter, setReduceCounter] = useState(1);

    const reduce = () => {
         setReduceCounter(reduceCounter-1);
    }

    return (
        <>
            <HabitReduceContext.Provider value={{reduceCounter,reduce}}>
                {children}
            </HabitReduceContext.Provider>
        </>
    )
}