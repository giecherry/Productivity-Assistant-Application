import { useState } from "react";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";
import { useContext } from "react";

function CreateNewHabit() {
    let [habits, setHabits] = useState([]);

    let [title, setTitle] = useState();
    let [repeat, setRepeat] = useState();
    let [priority, setPriority] = useState();

    const AddHabit = () => {
        let newHabit = {
            title,
            repeat,
            priority,
        }

        setHabits([...habits, newHabit])
    };

    return (
        <>
            <h1>Add new habit</h1>
            <div className="createNewHabit">
                <form action={AddHabit}>
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>

                    <input type="number" placeholder="Repeat" value={repeat} onChange={(e) => setRepeat(e.target.value)} required/>

                    <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
                        <option value="" disabled selected>Select priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <button onClick={AddHabit}>Save habit</button>
                </form>
            </div>
        </>
    )
}

export default CreateNewHabit