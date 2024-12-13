import { useEffect, useState, useContext } from "react";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";
import { HabitReduceContext } from '../../context/Habit-context/HabitReduceContext.jsx';
import { DeleteHabitContext } from "../../context/Habit-context/DeleteHabitContext.jsx";

function CreateNewHabit() {

    const [habits, setHabits] = useState(JSON.parse(sessionStorage.getItem("Data")) || []);

    let {counter, increment} = useContext(HabitCounterContext)
    let {reduceCounter, reduce} = useContext(HabitReduceContext)
    let {reset} = useContext(DeleteHabitContext)

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
        };

        let updatedHabits = [...habits, newHabit]
        setHabits(updatedHabits)
        increment();
        // reduce();
    };

    return (
        <>
            <h4 className="habitHFour">Add new habit</h4>

            <div className="createHabit">
                <form onSubmit={AddHabit}>
                    <input className="HabitTitle" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>

                    <input className="HabitDescription" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>

                    <input className="HabitRepeat" type="number" placeholder="Repeat" value={repeat} onChange={(e) => setRepeat(e.target.value)} required/>

                    <select className="HabitPriority" value={priority} onChange={(e) => setPriority(e.target.value)} required>
                        <option value="" disabled>Select priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <button className="HabitButton" type="submit">Save habit</button>
                </form>

                <ul>
                    {habits.map((habit, i) => (
                    <li className="habitCard" key={habit.id}>
                        <h3>Habit: {habit.title}</h3>
                        <p>Repeat: {habit.repeat}</p>
                        <p>Priority: {habit.priority}</p>
                        <p>Count your repetitions {counter}</p>
                        <button className="HabitButton" onClick={increment}>+</button>
                        <button className="HabitButton" onClick={reduce}>-</button>
                        {/* <button className="HabitButton" onClick={reset}></button> */}
                        <button className="HabitButton"onClick={() => reset(habits, setHabits, habit)}>Delete</button>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CreateNewHabit

