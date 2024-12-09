import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isToday, isBefore } from 'date-fns';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CalendarCSS from './Calendar.module.css'
const Calendar = () => {
        const [currentMonth, setCurrentMonth] = useState(new Date());

    const events = [
            { id: 1, date: new Date(2024, 11, 5, 10, 45), title: "Sprint Planning", time: "10:45-11:00" },
            { id: 2, date: new Date(2024, 11, 6, 10, 45), title: "Performance review", time: "10:45-12:00" },
            { id: 3, date: new Date(2024, 10, 7, 10, 45), title: "Bi-weekly sync w/Alyne", time: "10:45-12:00" },
            { id: 4, date: new Date(2024, 11, 8, 10, 45), title: "Mid-week check-in", time: "10:45-11:00" },
    ];
    const eventsThisMonth = events.filter(event =>
        format(event.date, "yyyy-MM") === format(currentMonth, "yyyy-MM")
    );

    const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    return (
        <>
        <div>
            <h1>{format(currentMonth, "yyyy")}</h1>
            <div className={CalendarCSS.monthSelector}>
                <button onClick={handlePrevMonth}>&lt;</button>
                <h2>{format(currentMonth, "MMMM")}</h2>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>
            <div className={CalendarCSS.eventsListContainer}>
                {eventsThisMonth.map((event,i) => (
                <Link to={`/event/${event.id}`} key={i}>
                <div key={i} className={CalendarCSS[isBefore(event?.date, new Date()) && !isToday(event?.date) ? "past-event" : "upcoming-event"]}>
                    <div className={CalendarCSS.eventDate}>{format(event.date, "EEE dd")}</div>
                    <div>{event.title}</div>
                    <div>{event.time}</div>
                </div>
                </Link>
                ))}
            </div>
        </div>
        </>
    )
}

export default Calendar