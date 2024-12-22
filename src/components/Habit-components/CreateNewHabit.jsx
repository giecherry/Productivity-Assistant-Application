import { useEffect, useState, useContext } from "react";
import { HabitCounterContext } from "../../context/Habit-context/HabitCounterContext";
import HabitCSS from "./Habit.module.css";

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
            <div className={HabitCSS.CreatHabitContainer}>
                <div className={HabitCSS.CreateHabit}>
                    <h4 className={HabitCSS.HabitHFour}>Add new habit</h4>
                    <label htmlFor="Title">Title</label>
                    <input className={HabitCSS.HabitTitle} type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <label htmlFor="Description">Description</label>
                    <input className={HabitCSS.HabitDescription} type="text" placeholder="Habit description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <label htmlFor="Repeat">Repeat</label>
                    <input className={HabitCSS.HabitRepeat} type="number" placeholder="Repeat" value={repeat} onChange={(e) => setRepeat(e.target.value)} required/>
                    <label htmlFor="Priority">Priority</label>
                    <select className={HabitCSS.HabitPriority} value={priority} onChange={(e) => setPriority(e.target.value)} required>
                        <option value="" disabled>Select priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <button className={HabitCSS.HabitButton} onClick={handleSavedHabit}>Save habit</button>
                </div>
            </div>
        </>
    )
}

export default CreateNewHabit
