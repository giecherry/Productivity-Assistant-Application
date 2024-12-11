import { useState } from "react";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";
import { useContext } from "react";

function CreateNewHabit() {
    let [habits, setHabits] = useState([]);

    let {counter, increment} = useContext(HabitCounterContext)

    let [title, setTitle] = useState('');
    let [repeat, setRepeat] = useState('');
    let [priority, setPriority] = useState('');

    const AddHabit = (e) => {
        e.preventDefault();
        let newHabit = {
            title,
            repeat,
            priority,
        }

        let updatedHabits = [...habits, newHabit]
        setHabits(updatedHabits)
        increment();

    };

    return (
        <>
            <h1>Add new habit</h1>

            <div className="createHabit">
                <form onSubmit={AddHabit}>
                    <input className="HabitTitle" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>

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
                    {habits.map((habit,i) => (
                    <li key={i}>
                        <h3>Habit: {habit.title}</h3>
                        <p>Repeat: {habit.repeat}</p>
                        <p>Priority: {habit.priority}</p>
                        <p>Count your repetitions {counter}</p>
                        <button className="HabitButton" onClick={increment}>+</button>
                        <button onClick={() => deleteHabit(i)}>Delete</button>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CreateNewHabit