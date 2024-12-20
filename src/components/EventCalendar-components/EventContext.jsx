import { createContext, useState } from "react";


export const EventContext = createContext();

export function EventContextProvider ({children}){
    
    const [events, setEvents] = useState(() => {
        const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
        return savedEvents;
    });

    const addEvent = (newEvent) => {
        const updatedEvents = [...events, newEvent];
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));
        console.log("New event added in local storage:", newEvent);
    };


    return (
        <EventContext.Provider value={{ events, addEvent, setEvents }}>
            {children}
        </EventContext.Provider>
    );
}