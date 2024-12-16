import { format } from 'date-fns';
import { Link } from "react-router-dom";
import { EventContext } from "./EventContext";
import { useContext, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import NewEventCSS from './NewEvent.module.css'
import { se } from 'date-fns/locale';


const EventDetails = () => {
    
    const {events, setEvents} = useContext(EventContext)
    const { id } = useParams();
    const navigate = useNavigate();
    const [showEditForm, setShowEditForm] = useState(false);

    const event = events.find(event => event.id === parseInt(id)); 

    const deleteEvent = (eventId) => {
        const updatedEvents = events.filter(event => event.id !== eventId);
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));
    };
    const handleDelete = () => {
            deleteEvent(event.id);
            navigate('/calendar');     
    };

    const handleEdit = () => {
        setShowEditForm(!showEditForm);
    };

    const isSameDay = (startDateTime, endDateTime) => {
            return format(new Date(startDateTime), "MM-dd") === format(new Date(endDateTime), "MM-dd");
        };
    
    return (
        <>
        {showEditForm ? 
        
        <div>
            <div className={NewEventCSS.newEventContainer}>
                            <h1>{event.title}</h1>
                            <div className={NewEventCSS.inputContainer}>
                                <div className={NewEventCSS.eventTitleContainer}>
                                    <label htmlFor="eventTitle">Title</label>
                                    <input className={NewEventCSS.input} type="text" id ="eventTitle" placeholder="Event title" /> 
                                </div>
            
                                <div className={NewEventCSS.eventStartContainer}>
                                    <label htmlFor="'eventStart">Start</label>
                                    <div>
                                        <input className={NewEventCSS.input} id="eventStart" type="date" /> 
                                        <input className={NewEventCSS.input} id="eventStart" type="time" />
                                    </div>
                                </div>
                                <div className={NewEventCSS.eventEndContainer}>
                                    <label htmlFor="eventEnd"> End </label>
                                    <div>
                                        <input className={NewEventCSS.input} id="eventEnd" type="date" /> 
                                        <input className={NewEventCSS.input} id="eventEnd" type="time" />
                                    </div>
                                </div>
                            </div>
                        </div>
            <button>Save</button>
            <Link to="/calendar" onClick={setShowEditForm(false)}><button>&#8592;</button></Link>
        </div>
        
        :
            <div>
                <h1>{events[0].title}</h1>
                { isSameDay(event.startDateTime, event.endDateTime) ?
                    <h2>Date: {format(new Date(event.startDateTime), "EEEE dd")}</h2>:
                    <h2>Date: {format(event.startDateTime, "EEEE dd")} - {format(event.endDateTime, "EEEE dd")}</h2>
                }
                <h2>Time: {format((events[0].startDateTime), "HH:mm")} - {format((events[0].endDateTime), "HH:mm")}</h2>

                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEdit}>Edit</button>

                <Link to="/calendar"><button>&#8592;</button></Link>
            </div>
        }
        </>
    )
}

export default EventDetails