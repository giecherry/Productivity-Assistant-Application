import { format, addMonths, subMonths, isToday, isBefore } from 'date-fns';
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import CalendarCSS from './Calendar.module.css'
import { EventContext } from "./EventContext";
import { UserContext } from "../UserContext";

const Calendar = () => {

    const { events } = useContext(EventContext);
    const { inUser } = useContext(UserContext);
    
    //*Handle month change------------------
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const eventsThisMonth = events .filter(event =>format(event.startDateTime, "yyyy-MM") === format(currentMonth, "yyyy-MM") && event.owner === inUser.userName);
    const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

    events.sort((a, b) => new Date(a.startDateTime) - new Date(b.startDateTime));

    const handleEventClassName = (event) => {
        const now = new Date();
        const startTime = new Date(event.startDateTime);
        if (startTime < now) {
            return "past-event";
        } else {
            return "upcoming-event";
        }
    };

    return (
        <>
        <div>
            <h1>{format(currentMonth, "yyyy")}</h1>
            <div className={CalendarCSS.monthSelector}>
                <button className={CalendarCSS.prevMonthButton} onClick={handlePrevMonth}>&lt;</button>
                <h2>{format(currentMonth, "MMMM")}</h2>
                <button className={CalendarCSS.nextMonthButton}  onClick={handleNextMonth}>&gt;</button>
            </div>            
            <Link to="/calendar/newEvent"><button className={CalendarCSS.addEventButton}>+</button></Link>
            <div className={CalendarCSS.eventsListContainer}>
                {eventsThisMonth.map((event,i) => (
                    <Link to={`/event/${event.id}`} key={i}>
                    <div key={i} className={CalendarCSS[handleEventClassName(event)]}>
                        <div className={CalendarCSS.eventDate}>{format(event.startDateTime, "EEE dd")}-{format(event.endDateTime, "EEE dd")}</div>
                        <div>{event.title}</div>
                        <div>{format(new Date(event.startDateTime), "HH:mm")} - {format(new Date(event.endDateTime), "HH:mm")}</div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
        </>
    )
}

export default Calendar