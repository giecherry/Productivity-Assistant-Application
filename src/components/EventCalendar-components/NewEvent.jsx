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
                <input className={NewEventCSS.input} type="text" placeholder="Event title" onChange={(e)=> setEventTitle(e.target.value)}/>
                {console.log(eventTitle)}
                <input className={NewEventCSS.input} type="date" placeholder="Event date" />
                <input className={NewEventCSS.input} type="time" placeholder="Start time" />
                <input className={NewEventCSS.input} type="time" placeholder="End time" />
                <button onClick={addEvent}>Add</button>
            </div>
            
        </>
    )
}

export default NewEvent