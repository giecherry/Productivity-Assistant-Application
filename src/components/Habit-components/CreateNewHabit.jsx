import { useEffect, useState, useContext } from "react";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";

function CreateNewHabit() {

    const [habits, setHabits] = useState(JSON.parse(localStorage.getItem("habits")) || []);

    useEffect(() => {
            console.log("Save habit in localStorage")
            localStorage.setItem("habit", JSON.stringify(habits))
        }, [habits]);

    const {AddHabit} = useContext(HabitCounterContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [repeat, setRepeat] = useState(0);
    const [priority, setPriority] = useState('');

    const handleSavedHabit = (e) => {
        e.preventDefault();
        AddHabit({title, description, repeat, priority});
    };

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

                    <button className="HabitButton" onClick={handleSavedHabit}>Save habit</button>
                </div>
            </div>
        </>
    )
}

export default CreateNewHabit
