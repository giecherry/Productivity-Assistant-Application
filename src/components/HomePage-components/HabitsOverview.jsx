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

    const highestCount = habits
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
                                <h4>Title: {habit.title}</h4>
                                <h3>Repeat: {habit.repeat}</h3>
                                <h3>Priority: {habit.priority}</h3>
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