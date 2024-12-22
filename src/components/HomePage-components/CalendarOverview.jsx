import HomePageCSS from "./HomePage.module.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { format, isAfter } from 'date-fns';
import { EventContext } from "../EventCalendar-components/EventContext";
import { UserContext } from "../UserContext";

const CalendarOverview = () => {
    const { inUser } = useContext(UserContext);

    const { events } = useContext(EventContext);
    
    const now = new Date();

    const threeLastEvents = events
        .filter(event => event.owner === inUser.userName && isAfter(new Date(event.startDateTime), now))
        .sort((a, b) => new Date(a.startDateTime) - new Date(b.startDateTime))
        .slice(0, 3);

    const isSameDay = (startDateTime, endDateTime) => {
            return format(new Date(startDateTime), "MM-dd") === format(new Date(endDateTime), "MM-dd");
        };

    return (
        <>
            <div className={HomePageCSS.calendarContainer}>
                <h1>Calendar</h1>
                <div className={HomePageCSS.overviewEvents}>
                    {threeLastEvents.map((event,i) => (
                        <Link to={`/event/${event.id}`} key={i}>
                        <div key={event.id} className={HomePageCSS.overviewEvent}>
                            <h3>{event.title}</h3>
                            <div>
                                { isSameDay(event.startDateTime, event.endDateTime) ?
                                <div>
                                    <p>{format(new Date(event.startDateTime), "EEE, do MMM")}</p>
                                    <p>{format(new Date(event.startDateTime), "HH:mm")} - {format(new Date(event.endDateTime), "HH:mm")}</p>
                                </div>
                                :
                                <div>
                                <p>{format(new Date(event.startDateTime), "EEE, do MMM")} - {format(new Date(event.startDateTime), "HH:mm")}</p>
                                <p>{format(new Date(event.endDateTime), "EEE, do MMM")} - {format(new Date(event.endDateTime), "HH:mm")}</p>
                                </div>
                                }
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
                <Link to="/calendar"><button>Show more</button></Link>
            </div>
        </>
    )
}

export default CalendarOverview