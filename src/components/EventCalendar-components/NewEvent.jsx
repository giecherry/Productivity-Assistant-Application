import { useContext, useState } from "react";
import { EventContext } from "./EventContext";
import NewEventCSS from './NewEvent.module.css'


const NewEvent = () => {

    const {events} = useContext(EventContext)

    const [eventTitle, setEventTitle] = useState("")
    const [eventDate, setEventDate] = useState(null)
    const [eventStartTime, setEventStartTime] = useState(null)
    const [eventEndTime, setEventEndTime] = useState(null)


    const {addEvent} = useContext(EventContext)
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
                        <input className={NewEventCSS.input} id="eventDate" type="date" placeholder="Event date" /> 
                    </div>
                    
                    <div className={NewEventCSS.startTimeContainer}>
                        <label htmlFor="startTime"> Start Time </label>
                        <input className={NewEventCSS.input} id="startTime" type="time" placeholder="Start time" />
                    </div>
                    <div className={NewEventCSS.endTimeContainer}>
                        <label htmlFor="endTime"> End Time </label>
                        <input className={NewEventCSS.input} id="endTime" type="time" placeholder="End time" />
                    </div>
                </div>
                <button onClick={addEvent}>Add</button>
            </div>
            
        </>
    )
}

export default NewEvent