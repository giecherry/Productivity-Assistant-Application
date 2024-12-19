import { useContext, useEffect, useState } from "react";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";

function HabitFiltSort ({onFilterChange}) {

    const {habits} = useContext(HabitCounterContext);
    const [sortHabits, setSortHabits] = useState('');
    const [filterHabits, setFilterHabits] = useState('All');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        let updatedHabits = [...habits];

        if (filterHabits) {
            updatedHabits = updatedHabits.filter((habits) => habits.priority === filterHabits);
        }

        if (sortHabits === "priority")  {
            updatedHabits.sort((a, b) => {
                return sortOrder === "asc" ? a.priority - b.priority : b.priority - a.priority;
            });
        }
        else if (sortHabits === "repeat") {
            updatedHabits.sort((a, b) => {
                return sortOrder === "asc" ? a.repeat - b.repeat : b.repeat - a.repeat;
            });
        }
        onFilterChange(updatedHabits);
        }, [habits, filterHabits, sortHabits, sortHabits]);
    
   /*  useEffect(() => {
        console.log("Save habit in localStorage")
        localStorage.setItem("habit", JSON.stringify(habits))
    }, [habits]); */

    return (
        <>
            <div className="SortAndFilt">
                <h5>Filter and sort your habits</h5>
                <div className="FiltSort">
                    <select className="FilterPriority" value={filterHabits} onChange={(e) => setFilterHabits(e.target.value)}>
                        <option value="" disabled>Filter habits</option>
                        <option value="All">All</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                
                <div className="SortDiv">
                    <select className="SortPriority" onChange={(e) => setSortHabits('priority', e.target.value)}>
                        <option value="" disabled>Sort habits by priority</option>
                        <option value="asc">Low to high</option>
                        <option value="desc">High to low</option>
                    </select>
                    <select className="SortRepeat" onChange={(e) => setSortHabits('repeat', e.target.value)}>
                        <option value="" disabled>Sort habits by repeat</option>
                        <option value="asc">Lowest to highest</option>
                        <option value="desc">Highest to lowest</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default HabitFiltSort