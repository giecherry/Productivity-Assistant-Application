import { useContext, useMemo } from "react";
import { HabitContext } from "../../context/Habit-context/HabitContext";
import HabitCSS from "./Habit.module.css";

const HabitList = ({filter}) => {
    const { habits, increment, reduce, zero, reset } = useContext(HabitContext);

    const filteredHabits = useMemo(() => {
        let result = habits;

        if (filter.priority) {
            console.log("Filtering by priority");
            console.log(filter.priority);
            result = result.filter((habit) => habit.priority === filter.priority);
        }

        if (filter.sortBy === "priority") {
            result.sort((a, b) => {
                if (filter.sortOrder === "asc") {
                    return a.priority.localeCompare(b.priority);
                } else {
                    return b.priority.localeCompare(a.priority);
                }
            });
        }

        if (filter.sortBy === "repeat") {
            result.sort((a, b) => {
                if (filter.sortOrder === "asc") {
                    return a.repeat.localeCompare(b.repeat);
                } else {
                    return b.repeat.localeCompare(a.repeat);
                }
            });
        }

        return result;
    }, [habits, filter]);
    
    return (
        <div>  
            <ul>
                {filteredHabits.map((habits) => (
                    <li key={habits.id}>        
                        <h3>Habit: {habits.title}</h3>
                        <p><strong>Repeat:</strong> {habits.repeat}</p>
                        <p><strong>Priority:</strong> {habits.priority}</p>
                        <p><strong>Count your repetitions</strong> {habits.counter}</p>
                        <button className={HabitCSS.HabitButton} onClick={() => increment(habits.id, habits)}>+</button>
                        <button className={HabitCSS.HabitButton} onClick={() => reduce(habits.id, habits)}>-</button>
                        <button className={HabitCSS.HabitButton} onClick={() => zero(habits.id, habits)}>Reset counter</button>
                        <button className={HabitCSS.HabitButton}onClick={() => reset(habits.id, habits)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HabitList;