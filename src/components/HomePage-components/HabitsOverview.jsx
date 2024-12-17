import HomePageCSS from "./HomePage.module.css"
import { Link } from "react-router-dom";

const HabitsOverview = () => {

    return (
        <>
            <div className={HomePageCSS.habitsContainer}>
                <h1 className="HabitHOne">Habits</h1>
                <Link to="/habits"><button>Show more</button></Link>
            </div>
        </>
    )
}

export default HabitsOverview