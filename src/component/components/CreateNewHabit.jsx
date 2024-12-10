import { useState } from "react";
import HabitDelete from "./HabitDelete"

function CreateNewHabit() {
    let [habits, setHabits] = useState([]);

    let [title, setTitle] = useState();
    let [repeat, setRepeat] = useState();
    let [priority, setPriority] = useState();

    const AddHabit = () => {
        let NewHabit = {
            title,
            repeat,
            priority,
        }

        setHabits
    };

    return (
        <>
            <h1>Add new habit</h1>
            <div className="createNewHabit">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>

                <input type="number" placeholder="Repeat" value={repeat} onChange={(e) => setRepeat(e.target.value)}/>

                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="" disabled selected>Select priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <button onClick={AddHabit}>Save habit</button>
            </div>
        </>
    )
}

export default CreateNewHabit