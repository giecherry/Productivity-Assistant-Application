import { useContext, useEffect, useState } from "react";
import { format } from 'date-fns';
import { EventContext } from "./EventContext";
import NewEventCSS from './NewEvent.module.css'
import { Link, useNavigate } from "react-router-dom";


const NewEvent = () => {
    const navigate = useNavigate();

    const {addEvent, events} = useContext(EventContext)

    const [eventTitle, setEventTitle] = useState("") 
    const [eventStartDate, setEventStartDate] = useState(null)
    const [eventStartTime, setEventStartTime] = useState(null)
    const [eventEndDate, setEventEndDate] = useState(null)
    const [eventEndTime, setEventEndTime] = useState(null)

    const handleAddEvent = () => {
        if (!eventTitle || !eventStartDate || !eventStartTime || !eventEndTime || !eventEndDate) {
            alert("Please fill out all event details.");
            return;
        }

        const newEvent = {
            id: events.length + 1,
            title: eventTitle,
            startDate:new Date(eventStartDate),
            endDate:new Date(eventEndDate),
            startTime: eventStartTime,
            endTime: eventEndTime
        };

        addEvent(newEvent);
        alert("Event added successfully!");

        navigate('/calendar'); 
    };
    
    
    return (
        <>
            <div className={NewEventCSS.newEventContainer}>
                {eventTitle? <h1>{eventTitle}</h1> :<h1>New Event</h1>}
                <div className={NewEventCSS.inputContainer}>
                    
                    <div className={NewEventCSS.eventTitleContainer}>
                        <label htmlFor="eventTitle">Title</label>
                        <input className={NewEventCSS.input} type="text" id ="eventTitle" placeholder="Event title" onChange={(e)=> setEventTitle(e.target.value)}/> 
                    </div>

                    <div className={NewEventCSS.eventStartContainer}>
                        <label htmlFor="'eventStart">Start</label>
                        <div>
                            <input className={NewEventCSS.input} id="eventStart" type="date" onChange={(e) => setEventStartDate(e.target.value) } /> 
                            <input className={NewEventCSS.input} id="eventStart" type="time" onChange={(e) => setEventStartTime(e.target.value) } />
                        </div>
                    </div>
                    <div className={NewEventCSS.eventEndContainer}>
                        <label htmlFor="eventEnd"> End </label>
                        <div>
                            <input className={NewEventCSS.input} id="eventEnd" type="date" onChange={(e) => setEventEndDate(e.target.value) } /> 
                            <input className={NewEventCSS.input} id="eventEnd" type="time" onChange={(e) => setEventEndTime(e.target.value) }/>
                        </div>
                    </div>
                </div>
                <button onClick={handleAddEvent}>Add</button>
            </div>
            <Link to="/calendar"><button>&#8592;</button></Link>
            
        </>
    )
}

export default NewEvent