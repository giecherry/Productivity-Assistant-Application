import { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventContext";
import NewEventCSS from './NewEvent.module.css'
import { Link } from "react-router-dom";


const NewEvent = () => {

    const {addEvent} = useContext(EventContext)

    const [eventTitle, setEventTitle] = useState("") 
    const [eventDate, setEventDate] = useState(null)
    const [eventStartTime, setEventStartTime] = useState(null)
    const [eventEndTime, setEventEndTime] = useState(null)

    const handleAddEvent = () => {
        if (!eventTitle || !eventDate || !eventStartTime || !eventEndTime) {
            alert("Please fill out all event details.");
            return;
        }

        const newEvent = {
            id: Date.now(),
            title: eventTitle,
            date: new Date(eventDate),
            time: `${eventStartTime} - ${eventEndTime}`,
        };

        addEvent(newEvent);
        alert("Event added successfully!");
    };

    


    return (
        <>
            <div className={NewEventCSS.newEventContainer}>
                <h1>New Event</h1>
                <div className={NewEventCSS.inputContainer}>
                    
                    <div className={NewEventCSS.eventTitleContainer}>
                        <label htmlFor="eventTitle">Title</label>
                        <input className={NewEventCSS.input} type="text" id ="eventTitle" placeholder="Event title" onChange={(e)=> setEventTitle(e.target.value)}/> 
                    </div>

                    <div className={NewEventCSS.eventDateContainer}>
                        <label htmlFor="'eventDate">Date</label>
                        <input className={NewEventCSS.input} id="eventDate" type="date" placeholder="Event date" onChange={(e) => setEventDate(new Date(e.target.value)) } /> 
                    </div>
                    
                    <div className={NewEventCSS.startTimeContainer}>
                        <label htmlFor="startTime"> Start Time </label>
                        <input className={NewEventCSS.input} id="startTime" type="time" placeholder="Start time" onChange={(e) => setEventStartTime(e.target.value) } />
                    </div>
                    <div className={NewEventCSS.endTimeContainer}>
                        <label htmlFor="endTime"> End Time </label>
                        <input className={NewEventCSS.input} id="endTime" type="time" placeholder="End time"  onChange={(e) => setEventEndTime(e.target.value) }/>
                    </div>
                </div>
                <button onClick={handleAddEvent} >Add</button>
            </div>
            <Link to="/calendar"><button>&#8592;</button></Link>
            
        </>
    )
}

export default NewEvent