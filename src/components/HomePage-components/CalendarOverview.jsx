import HomePageCSS from "./HomePage.module.css"
import { Link } from "react-router-dom";

const CalendarOverview = () => {
    return (
        <>
            <div className={HomePageCSS.calendarContainer}>
                <h1>Calendar Overview</h1>
                <Link to="/calendar"><button>Show more</button></Link>
            </div>
        </>
    )
}

export default CalendarOverview