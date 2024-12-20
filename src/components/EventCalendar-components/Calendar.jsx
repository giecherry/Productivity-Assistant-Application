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

    const isSameDay = (startDateTime, endDateTime) => {
        return format(new Date(startDateTime), "MM-dd") === format(new Date(endDateTime), "MM-dd");
    };

    return (
        <>
        <div className={CalendarCSS.CaledarBody}>
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
                        <div className={CalendarCSS.eventContainer}>
                            <div className={CalendarCSS.eventDate}>
                            { isSameDay(event.startDateTime, event.endDateTime) ?
                                <div>{format(new Date(event.startDateTime), "EEE dd")}</div>:
                                <div>{format(event.startDateTime, "EEE dd")}-{format(event.endDateTime, "EEE dd")}</div>
                            }
                            </div>
                            <div key={i} className={CalendarCSS[handleEventClassName(event)]}>
                                <div>{event.title}</div>
                                <div>{format(new Date(event.startDateTime), "HH:mm")} - {format(new Date(event.endDateTime), "HH:mm")}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Link to="/home"><button className={CalendarCSS.addEventButton}>&#8592;</button></Link>
        </div>
        </>
    )
}

export default Calendar