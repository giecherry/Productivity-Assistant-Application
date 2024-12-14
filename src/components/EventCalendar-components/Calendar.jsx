import { format, addMonths, subMonths, isToday, isBefore } from 'date-fns';
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import CalendarCSS from './Calendar.module.css'
import { EventContext } from "./EventContext";

const Calendar = () => {

    const { events } = useContext(EventContext);
    
    //*Handle month change------------------
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const eventsThisMonth = events .filter(event =>format(event.startDate, "yyyy-MM") === format(currentMonth, "yyyy-MM"));
    const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

    //*Test events-------------------
    const testEvents=[
            { id: 1, date: new Date(2024, 11, 5, 10, 45), title: "Sprint Planning", time: "10:45-11:00" },
            { id: 2, date: new Date(2024, 11, 6, 10, 45), title: "Performance review", time: "10:45-12:00" },
            { id: 3, date: new Date(2024, 10, 7, 10, 45), title: "Bi-weekly sync w/Alyne", time: "10:45-12:00" },
            { id: 4, date: new Date(2024, 10, 8, 10, 45), title: "Mid-week check-in", time: "10:45-11:00" },
            { id: 5, date: new Date(2024, 11, 9, 10, 45), title: "Retro", time: "10:45-11:00" },
            { id: 6, date: new Date(2024, 11, 10, 10, 45), title: "Studio meetup", time: "10:45-11:00" },
            { id: 7, date: new Date(2024, 11, 11, 10, 45), title: "Marketing Monthly", time: "10:45-11:00" },
            { id: 8, date: new Date(2024, 11, 12, 10, 45), title: "Weekly Planning", time: "10:45-11:00" },
    ];

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