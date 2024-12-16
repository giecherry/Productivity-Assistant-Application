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
    const eventsThisMonth = events .filter(event =>format(event.startDate, "yyyy-MM") === format(currentMonth, "yyyy-MM") && event.owner === inUser.userName);
    const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));


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
                    <div key={i} className={CalendarCSS[isBefore(event?.startDate, new Date()) && !isToday(event?.startDate) ? "past-event" : "upcoming-event"]}>
                        <div className={CalendarCSS.eventDate}>{format(event.startDate, "EEE dd")}</div>
                        <div>{event.title}</div>
                        <div>{event.startTime} - {event.endTime}</div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
        </>
    )
}

export default Calendar