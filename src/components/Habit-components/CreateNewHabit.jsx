import { useState } from "react";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";
import { useContext } from "react";

function CreateNewHabit() {
    let [habits, setHabits] = useState([]);

    let {counter, increment} = useContext(HabitCounterContext)

    let [title, setTitle] = useState('');
    let [repeat, setRepeat] = useState('');
    let [priority, setPriority] = useState('');

    const AddHabit = () => {

        let newHabit = {
            title,
            repeat,
            priority,
        }

        setHabits([...habits, newHabit])
        increment();
    };

    return (
        <>
            <h1>Add new habit</h1>
            <p>Count your repetitions {counter}</p>
            <button onClick={increment}>+</button>

            <div className="createNewHabit">
                <form onSubmit={AddHabit}>
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>

                    <input type="number" placeholder="Repeat" value={repeat} onChange={(e) => setRepeat(e.target.value)} required/>

                    <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
                        <option value="" disabled>Select priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <button onClick={AddHabit}>Save habit</button>
                </form>
                <ul>
                    {habits.map((habit,i) =>
                    <li key={i}>
                        <h3>{habits}</h3>
                    </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default CreateNewHabit