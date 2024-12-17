import { useEffect, useState, useContext } from "react";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";
import { DeleteHabitContext } from "../../context/Habit-context/DeleteHabitContext";
import { HabitFiltSortContext } from "../../context/Habit-context/HabitFiltSortContext";

function CreateNewHabit() {

    const [habits, setHabits] = useState(JSON.parse(localStorage.getItem("Data")) || []);

    let {increment, reduce, zero} = useContext(HabitCounterContext)
    let {reset} = useContext(DeleteHabitContext)
    let {filterHabits, setFilterHabits, sortHabits, setSortHabits} = useContext(HabitFiltSortContext)

    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [repeat, setRepeat] = useState(0);
    let [priority, setPriority] = useState('');

    useEffect(() => {
        console.log("Save habit in localStorage")
        localStorage.setItem("Data", JSON.stringify(habits))
    }, [habits])

    function getSortedArray (arrayToSort) {
        return arrayToSort.sort((a, b) => {
            if (sortHabits.keyToSort === 'repeat') {
                return sortHabits.direction === 'asc' ? a.repeat - b.repeat : b.repeat - a.repeat;
            }
            if (sortHabits.keyToSort === 'priority') {
                const priorityOrder = {'High': 3, 'Medium': 2, 'Low':1};
                return sortHabits.direction === 'asc'
                    ? priorityOrder[a.priority] - priorityOrder[b.priority]
                    : priorityOrder[b.priority] - priorityOrder[a.priority];
            }
            return 0;
        });
    }

    function handleSortChange(keyToSort, direction) {
        setSortHabits({
            keyToSort,
            direction
        });
    }

    const AddHabit = (e) => {
        e.preventDefault();

        let newHabit = {
            id:Date.now(),
            title,
            description,
            repeat,
            priority,
            counter:0,
        };

        let updatedHabits = [...habits, newHabit]
        setHabits(updatedHabits)
    }

    return (
        <>
            <div className="FilterDiv">
                <select className="FilterPriority" value={filterHabits} onChange={(e) => setFilterHabits(e.target.value)}>
                    <option value="" disabled>Filter habits</option>
                    <option value="All">All</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>

            <div className="SortDiv">
                <select className="SortPriority" onChange={(e) => handleSortChange('priority', e.target.value)}>
                    <option value="" disabled>Sort habits by priority</option>
                    <option value="asc">Low to high</option>
                    <option value="desc">High to low</option>
                </select>
                <select className="SortRepeat" onChange={(e) => handleSortChange('repeat', e.target.value)}>
                    <option value="" disabled>Sort habits by repeat</option>
                    <option value="asc">Lowest to highest</option>
                    <option value="desc">Highest to lowest</option>
                </select>
            </div>
            
            <div className="createHabitContainer">
                <h4 className="habitHFour">Add new habit</h4>

                <div className="createHabit">
                    <input className="HabitTitle" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <input className="HabitDescription" type="text" placeholder="Habit description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <input className="HabitRepeat" type="number" placeholder="Repeat" value={repeat} onChange={(e) => setRepeat(e.target.value)} required/>
                    <select className="HabitPriority" value={priority} onChange={(e) => setPriority(e.target.value)} required>
                        <option value="" disabled>Select priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <button className="HabitButton" onClick={AddHabit}>Save habit</button>
                </div>

                <div>  
                    <ul>
                        {getSortedArray(
                            (filterHabits === "All" || !filterHabits ? habits : habits.filter((habit) => habit.priority === filterHabits))
                            ).map((habit) => (
                                <li className="habitCard" key={habit.id}>
                                    <h3>Habit: {habit.title}</h3>
                                    <p>Repeat: {habit.repeat}</p>
                                    <p>Priority: {habit.priority}</p>
                                    <p>Count your repetitions {habit.counter}</p>
                                    <button className="HabitButton" onClick={() => increment(habit.id, habits, setHabits)}>+</button>
                                    <button className="HabitButton" onClick={() => reduce(habit.id, habits, setHabits)}>-</button>
                                    <button className="HabitButton" onClick={() => zero(habit.id, habits, setHabits)}>Reset counter</button>
                                    <button className="HabitButton"onClick={() => reset(habit.id, habits, setHabits)}>Delete</button>
                                </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CreateNewHabit
