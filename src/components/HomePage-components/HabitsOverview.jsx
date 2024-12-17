import { useContext } from "react";
import HomePageCSS from "./HomePage.module.css"
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const HabitsOverview = () => {

    const {inUser} = useContext(UserContext);

    const highestCount = habitsContainer
        .sort((a, b) => high count(a.count) - high count(b.count))
        .slice(0, 3);

    return (
        <>
            <div className={HomePageCSS.habitsContainer}>
                <h1 className="HabitHOne">Habits</h1>
                <div>

                </div>
                <div>

                </div>
                <div>
                    
                </div>
                <Link to="/habits"><button>Show more</button></Link>
            </div>
        </>
    )
}

export default HabitsOverview