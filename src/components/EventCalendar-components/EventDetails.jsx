import { format } from 'date-fns';
import { Link } from "react-router-dom";
import { EventContext } from "./EventContext";
import { useContext, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import NewEventCSS from './NewEvent.module.css'
import EventDetailsCSS from './EventDetails.module.css'



const EventDetails = () => {
    
    const {events, setEvents} = useContext(EventContext)
    const { id } = useParams();
    const navigate = useNavigate();
    const [showEditForm, setShowEditForm] = useState(false);
    const [event, setEvent] = useState(events.find(event => event.id === parseInt(id)))

    const [editedEventTitle, setEditedEventTitle] = useState(event.title) 
    const [editedEventStartDate, setEditedEventStartDate] = useState(new Date(event.startDateTime).toISOString().split("T")[0])
    const [editedEventStartTime, setEditedEventStartTime] = useState(new Date(event.startDateTime).toISOString().split("T")[1].slice(0, 5))
    const [editedEventEndDate, setEditedEventEndDate] = useState(new Date(event.endDateTime).toISOString().split("T")[0])
    const [editedEventEndTime, setEditedEventEndTime] = useState(new Date(event.endDateTime).toISOString().split("T")[1].slice(0, 5))


    const deleteEvent = (eventId) => {
        const updatedEvents = events.filter(event => event.id !== eventId);
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));
    };
    const handleDelete = () => {
            deleteEvent(event.id);
            navigate('/calendar');     
    };

    const handleEditForm = () => {
        setShowEditForm(true);
        console.log("Edit mode: ON")
    };

    const updateEvents = (event) => {
        const updatedEvents = [...events];
        let currentIndex = events.findIndex(event => event.id === parseInt(id))
        updatedEvents[currentIndex] = event;
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));
    }

    const handleEdit = () => {
        if (!editedEventTitle || !editedEventStartDate || !editedEventStartTime || !editedEventEndDate || !editedEventEndTime) {
            alert("Please fill out all event details.");
            return;
        }
        const startDateTimeString = `${editedEventStartDate}T${editedEventStartTime}`;
        const endDateTimeString = `${editedEventEndDate}T${editedEventEndTime}`;
        const startDateTime = new Date(startDateTimeString); 
        const endDateTime = new Date(endDateTimeString);

        const editedEvent = {
            id: parseInt(id),
            owner: JSON.parse(sessionStorage.getItem("Inloggad user:")).userName,
            title: editedEventTitle,
            startDateTime:new Date(startDateTime),
            endDateTime:new Date(endDateTime),
        };

        setEvent(editedEvent);
        
        updateEvents(editedEvent,editedEvent.id);

        alert("Event edited successfully!");

        setShowEditForm(false)
        navigate("/calendar"); 
    }

    const isSameDay = (startDateTime, endDateTime) => {
        return format(new Date(startDateTime), "MM-dd") === format(new Date(endDateTime), "MM-dd");
    };
    
    return (
        <div className={EventDetailsCSS.EventDetailsBody}>
        {showEditForm ? 
            <div>
                <div className={NewEventCSS.newEventContainer}>
                                <h1>{event.title}</h1>
                                <div className={NewEventCSS.inputContainer}>
                                    <div className={NewEventCSS.eventTitleContainer}>
                                        <label htmlFor="eventTitle">Title</label>
                                        <input className={NewEventCSS.input} value={editedEventTitle} type="text" id ="eventTitle" placeholder={event.title} onChange={(e)=> setEditedEventTitle(e.target.value)}/> 
                                    </div>
                
                                    <div className={NewEventCSS.eventStartContainer}>
                                        <label htmlFor="'eventStart">Start</label>
                                        <div>
                                            <input className={NewEventCSS.input} value={editedEventStartDate} id="eventStart" type="date" onChange={(e) => setEditedEventStartDate(e.target.value) }  /> 
                                            <input className={NewEventCSS.input} value={editedEventStartTime} id="eventStart" type="time" onChange={(e) => setEditedEventStartTime(e.target.value) } />
                                        </div>
                                    </div>
                                    <div className={NewEventCSS.eventEndContainer}>
                                        <label htmlFor="eventEnd"> End </label>
                                        <div>
                                            <input className={NewEventCSS.input} value={editedEventEndDate} id="eventEnd" type="date" onChange={(e) => setEditedEventEndDate(e.target.value) } /> 
                                            <input className={NewEventCSS.input} value={editedEventEndTime} id="eventEnd" type="time" onChange={(e) => setEditedEventEndTime(e.target.value) } />
                                        </div>
                                    </div>
                                </div>
                            </div>
                <button onClick={handleEdit}>Save</button>
                <Link to="/calendar" onClick={() => setShowEditForm(false)}><button>&#8592;</button></Link>
            </div>
        :
            <div className={EventDetailsCSS.EventDetailsContainer}>
                <h1>{event.title}</h1>
                { isSameDay(event.startDateTime, event.endDateTime) ?
                    <h2>Date: {format(new Date(event.startDateTime), "EEEE dd")}</h2>:
                    <h2>Date: {format(event.startDateTime, "EEEE dd")} - {format(event.endDateTime, "EEEE dd")}</h2>
                }
                <h2>Time: {format((event.startDateTime), "HH:mm")} - {format((event.endDateTime), "HH:mm")}</h2>

                <div>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleEditForm}>Edit</button>
                </div>
                

                <Link to="/calendar"><button>&#8592;</button></Link>
            </div>
        }
        </div>
    )
}

export default EventDetails