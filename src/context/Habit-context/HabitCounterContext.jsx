import { createContext, useState } from "react";

export const HabitCounterContext = createContext();

export function HabitCounterContextProvider ({children}) {

    const [counter, setCounter] = useState(1);

    const increment = () => {
         setCounter(counter+1);
    }

    const reduce = () => {
         setCounter(counter-1);
    }
    
    const  zero = () => {
        setCounter(counter===0);
    }

    return (
        <>
            <HabitCounterContext.Provider value={{counter,increment,reduce,zero}}>
                {children}
            </HabitCounterContext.Provider>
        </>
    )
}