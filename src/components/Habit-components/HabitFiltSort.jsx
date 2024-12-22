import { useEffect, useState } from "react";
import HabitCSS from "./Habit.module.css";

function HabitFiltSort ({onFilterChange = () => {}}) {

    const [priority, setPriority] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");
  
    useEffect(() => {
        onFilterChange({ priority, sortBy, sortOrder });
    }, [priority, sortBy, sortOrder, onFilterChange]);

    return (
        <>
            <div className={HabitCSS.FiltAndSort}>
                <div className="FiltSort">
                    <label htmlFor="FilterPriority">Filter by priority</label>
                    <select className={HabitCSS.FilterPriority} id="FilterPriority" value={priority} onChange={(e) => setPriority(e.target.value === 'All' ? '' : e.target.value)}>
                        <option value="" disabled>Filter habits</option>
                        <option value="All">All</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                
                <div className={HabitCSS.SortDiv}>
                <label htmlFor="SortPriority">Sort by priority</label>
                    <select className={HabitCSS.SortPriority}id="SortPriority"onChange={(e) => {setSortBy('priority'); setSortOrder(e.target.value);}}>
                        <option value="" disabled>Sort habits by priority</option>
                        <option value="asc">Lowest to highest</option>
                        <option value="desc">Highest to lowest</option>
                    </select>
                    <label htmlFor="SortRepear">Sort by repeat</label>
                    <select className={HabitCSS.SortRepeat}id="SortRepear"onChange={(e) => {setSortBy('repeat');setSortOrder(e.target.value);}}>
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