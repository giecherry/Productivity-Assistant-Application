import { useState } from "react";

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
        </>
    )
}