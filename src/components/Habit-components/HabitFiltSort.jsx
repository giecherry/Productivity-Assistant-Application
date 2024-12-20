import { useContext, useEffect, useState } from "react";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";
import HabitCSS from "./Habit.module.css";

function HabitFiltSort () {

    const {habits} = useContext(HabitCounterContext);
    const [sortHabits, setSortHabits] = useState('');
    const [filterHabits, setFilterHabits] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');
    const [displayedHabits, setDisplayedHabits] = useState([])

   
    useEffect(() => {
        let updatedHabits = [...habits];

        if (filterHabits && filterHabits !== "All") {
            updatedHabits = updatedHabits.filter((habit) => habit.priority === filterHabits);
        }

        if (sortHabits === "priority") {
            console.log("hej")
            updatedHabits.sort((a, b) =>
                sortOrder === "asc" ? a.priority.localeCompare(b.priority) : b.priority.localeCompare(a.priority)
            );
        } else if (sortHabits === "repeat") {
            updatedHabits.sort((a, b) =>
                sortOrder === "asc" ? a.repeat - b.repeat : b.repeat - a.repeat
            );
        }
        setDisplayedHabits(updatedHabits);
    }, [habits, filterHabits, sortHabits, sortOrder]);

    return (
        <>
            <div className={HabitCSS.FiltAndSort}>
                <h5>Filter and sort your habits</h5>
                <div className="FiltSort">
                    <label htmlFor="FilterPriority">Filter by priority</label>
                    <select className={HabitCSS.FilterPriority} id="FilterPriority" value={filterHabits} onChange={(e) => setFilterHabits(e.target.value)}>
                        <option value="" disabled>Filter habits</option>
                        <option value="All">All</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                
                <div className="SortDiv">
                <label htmlFor="SortPriority">Sort by priority</label>
                    <select className={HabitCSS.SortPriority} id="SortPriority" onChange={(e) => setSortHabits('priority')}>
                        <option value="" disabled>Sort habits by priority</option>
                        <option value="asc">Low to high</option>
                        <option value="desc">High to low</option>
                    </select>
                    <label htmlFor="SortRepear">Sort by repeat</label>
                    <select className={HabitCSS.SortRepeat} id="SortRepear" onChange={(e) => setSortHabits('repeat')}>
                        <option value="" disabled>Sort habits by repeat</option>
                        <option value="asc">Lowest to highest</option>
                        <option value="desc">Highest to lowest</option>
                    </select>
                </div>
            </div>
            <div className="HabitsList">
                {displayedHabits.map((habit) => (
                    <div key={habit.id} className="HabitItem">
                        <h4>{habit.title}</h4>
                        <p>Priority: {habit.priority}</p>
                        <p>Repeat: {habit.repeat}</p>
                    </div>
                ))}
            </div> 

        </>
    )
}

export default HabitFiltSort