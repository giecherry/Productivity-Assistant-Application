import { format } from 'date-fns';
import { Link } from "react-router-dom";
import { EventContext } from "./EventContext";
import { useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';


const EventDetails = () => {
    
    const {events, setEvents} = useContext(EventContext)
    const { id } = useParams();
    const navigate = useNavigate();

    const event = events.find(event => event.id === parseInt(id)); 

    const deleteEvent = (eventId) => {
        const updatedEvents = events.filter(event => event.id !== eventId);
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));
    };
    const handleClick = () => {
            deleteEvent(event.id);
            navigate('/calendar');     
    };
    
    return (
        <>
            <h1>{events[0].title}</h1>
            <h2>Date: {format((events[0].startDate), "yyyy/MM/dd")} - {format((events[0].endDate), "yyyy/MM/dd")}</h2>
            <h2>Time: {events[0].startTime} - {events[0].endTime}</h2>

            <button onClick={handleClick}>Delete</button>
            <button>Edit</button>

            <Link to="/calendar"><button>&#8592;</button></Link>
        </>
    )
}

export default EventDetails