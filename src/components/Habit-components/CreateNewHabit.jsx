import { useEffect, useState, useContext } from "react";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";
import { DeleteHabitContext } from "../../context/Habit-context/DeleteHabitContext";
import { HabitFiltSortContext } from "../../context/Habit-context/HabitFiltSortContext";

function CreateNewHabit() {

    const [habits, setHabits] = useState(JSON.parse(sessionStorage.getItem("Data")) || []);

    let {counter, increment, reduce, zero} = useContext(HabitCounterContext)
    let {reset} = useContext(DeleteHabitContext)
    let {filterHabits, setFilterHabits} = useContext(HabitFiltSortContext)

    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [repeat, setRepeat] = useState(0);
    let [priority, setPriority] = useState('');

    useEffect(() => {
        console.log("Save habit in sessionStorage")
        sessionStorage.setItem("Data", JSON.stringify(habits))
    }, [habits])

    const AddHabit = (e) => {
        e.preventDefault();

        let newHabit = {
            id:Date.now(),
            title,
            description,
            repeat,
            priority,
            counter: 0,
        };

        let updatedHabits = [...habits, newHabit]
        setHabits(updatedHabits)
    }

    let deleteHabit = (id) => {
        let updatedHabits = habits.filter((habit) => habit.id !== id)
        setHabits(updatedHabits);
    }

    let incrementCounter = (id) => {
        setHabits(habits.map(habit => habit.id === id ? {...habit, counter: habit.counter +1} : habit));
    }

    let reduceCounter = (id) => {
        setHabits(habits.map(habit => habit.id === id ? {...habit, counter: habit.counter -1} : habit));
    }

    let zeroCounter = (id) => {
        setHabits(habits.map(habit => habit.id === id ? {...habit, counter: 0} : habit));
    }

    let filteredHabits = filterHabits && filterHabits !== "All" ? habits.filter((habit) => habit.priority === filterHabits) : habits;

    let sortedHabits = filteredHabits.sort((a, b) => {
        const priority = ['Low', 'Medium', 'High'];
        return priority.indexOf(a.priority) - priority.indexOf(b.priority); 
    });

    return (
        <>
            <h4 className="habitHFour">Add new habit</h4>

            <div>
            <select value={filterHabits || "All"} onChange={(e) => setFilterHabits(e.target.value)}>
                    <option value="All">All</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            
            <ul>
                {filteredHabits.map((habit) => 
                    <li key={habit.id}>
                        {habit.priority}
                    </li>
                )}
            </ul>

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

                <ul>
                    {habits.map((habit, i) => (
                    <li className="habitCard" key={habit.id}>
                        <h3>Habit: {habit.title}</h3>
                        <p>Repeat: {habit.repeat}</p>
                        <p>Priority: {habit.priority}</p>
                        <p>Count your repetitions {habit.counter}</p>
                        <button className="HabitButton" onClick={() => incrementCounter(habit.id)}>+</button>
                        <button className="HabitButton" onClick={() => reduceCounter(habit.id)}>-</button>
                        <button className="HabitButton" onClick={() => zeroCounter(habit.id)}>Reset counter</button>
                        <button className="HabitButton"onClick={() => deleteHabit(habit.id)}>Delete</button>
                        {/* <button className="HabitButton" onClick={increment}>+</button>
                        <button className="HabitButton" onClick={reduce}>-</button>
                        <button className="HabitButton" onClick={zero}>Reset counter</button>
                        <button className="HabitButton"onClick={reset}>Delete</button> */}
                        {/* <button className="HabitButton"onClick={() => reset(habits, setHabits, habit)}>Delete</button> */}
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CreateNewHabit