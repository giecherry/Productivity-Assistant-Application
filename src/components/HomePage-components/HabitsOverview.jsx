import { useContext, useState } from "react";
import HomePageCSS from "./HomePage.module.css"
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";

const HabitsOverview = () => {

    const {inUser} = useContext(UserContext);
    const {habits} = useState(HabitCounterContext);

    const highestCount = (habits || [])
        .filter(habit => habit.owner === inUser?.userName)
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
                <Link to="/createnewhabits"><button>Show more</button></Link>
            </div>
        </>
    )
}

export default HabitsOverview