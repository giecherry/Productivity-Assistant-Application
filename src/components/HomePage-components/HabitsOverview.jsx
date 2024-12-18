import { useContext } from "react";
import HomePageCSS from "./HomePage.module.css"
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const HabitsOverview = ({habits}) => {

    const {inUser} = useContext(UserContext);

    const highestCount = habits
        .filter(habit => habit.owner === inUser.userName)
        .sort((a, b) => b.repeat - a.repeat)
        .slice(0, 3);

    return (
        <>
            <div className={HomePageCSS.habitsContainer}>
                <h1 className="HabitHOne">Habits</h1>
                {highestCount.map((habit) => (
                    <div key={habit.id}>
                        <div>
                            <div>
                                <h4>{habit.title}</h4>
                                <h3>{habit.repeat}</h3>
                                <h3>{habit.priority}</h3>
                            </div>
                            <div>
                                <h4>{habit.title}</h4>
                                <h3>{habit.repeat}</h3>
                                <h3>{habit.priority}</h3>
                            </div>
                            <div>
                                <h4>{habit.title}</h4>
                                <h3>{habit.repeat}</h3>
                                <h3>{habit.priority}</h3>
                            </div>
                        </div>
                    </div>
                ))}
                <Link to="/habits"><button>Show more</button></Link>
            </div>
        </>
    )
}

export default HabitsOverview