import { useContext, useState } from "react";
import HomePageCSS from "./HomePage.module.css"
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";

const HabitsOverview = () => {

    const [habits, setHabits] = useState(() => {
        const storedHabits = localStorage.getItem("habit");
        return storedHabits ? JSON.parse(storedHabits) : [];
    });

    const { inUser } = useContext(UserContext);

    const highestCount = habits
        .filter(habit => habit.owner === inUser.userName)
        .sort((a, b) => b.repeat - a.repeat)
        .slice(0, 3);

    return (
        <>
            <div className={HomePageCSS.habitsContainer}>
                <h1 className={HomePageCSS.HabitHOne}>Habits</h1>
                {highestCount.map((habit) => (
                    <div key={habit.id}>
                        <div>
                            <div className={HomePageCSS.HabitContent}>
                                <h3>Title: {habit.title}</h3>
                                <p>Repeat: {habit.repeat}</p>
                                <p>Priority: {habit.priority}</p>
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