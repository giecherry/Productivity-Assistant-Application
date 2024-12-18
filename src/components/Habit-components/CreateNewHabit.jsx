import { useEffect, useState, useContext } from "react";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";

function CreateNewHabit() {

    const {habits, AddHabit} = useContext(HabitCounterContext);

    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [repeat, setRepeat] = useState(0);
    let [priority, setPriority] = useState('');

    useEffect(() => {
        console.log("Save habit in localStorage")
        localStorage.setItem("habit", JSON.stringify(habits))
    }, [habits])

    return (
        <>
            
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
            </div>
        </>
    )
}

export default CreateNewHabit
