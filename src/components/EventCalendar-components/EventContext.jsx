import { createContext, useState } from "react";


export const EventContext = createContext();

export function EventContextProvider ({children}){

    const [events, setEvents] = useState([])

    const addEvent = () => {
        //logic for adding an event
        setEvents(...events, newEvent)
    }


    return(
        <EventContext.Provider value={{events, addEvent}}>
            {children}
        </EventContext.Provider>
    )
}