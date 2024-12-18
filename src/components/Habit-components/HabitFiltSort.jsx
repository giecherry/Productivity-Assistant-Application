import { useContext, useEffect } from "react";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";
import { useState } from "react";

function HabitFiltSort () {

    const {habits} = useContext(HabitCounterContext);
    const [sortHabits, setSortHabits] = useState('');
    const [filterHabits, setFilterHabits] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        let updatedHabits = [...habits];

        const filteredHabits =  filterHabits ? updatedHabits.filter((habits) => {
            return habits.selectedPriority === filterHabits;
        }) :updatedHabits;

        if (sortHabits === "priority")  {
            filteredHabits.sort((a, b) => {
                return sortOrder === "asc" ? a.priority - b.priority : b.priority - a.priority;
            });
        }

        if (sortHabits === "repeat") {
            return [...updatedHabits].sort((a, b) => {
                return sort === "asc" ? a.repeat - b.repeat : b.repeat - a.repeat;
            });
        }
        useEffect(() => {
            console.log("Save habit in localStorage")
            localStorage.setItem("habit", JSON.stringify(habits))
        }, [habits, filterHabits, sortHabits, sortOrder]);
    })

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