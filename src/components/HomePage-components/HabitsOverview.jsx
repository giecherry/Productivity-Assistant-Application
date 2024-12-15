import HomePageCSS from "./HomePage.module.css"
import { Link } from "react-router-dom";

const HabitsOverview = () => {
    return (
        <>
            <div className={HomePageCSS.habitsContainer}>
                <h1>Habits Overview</h1>
                <Link to="/habits"><button>Show more</button></Link>
            </div>
        </>
    )
}

export default HabitsOverview