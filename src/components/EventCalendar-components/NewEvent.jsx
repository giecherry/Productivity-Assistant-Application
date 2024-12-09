import { useContext } from "react";
import { EventContext } from "./EventContext";

const NewEvent = () => {

    const {events} = useContext(EventContext)

    const {addEvent} = useContext(EventContext)
    return (
        <>
            <h1>New Event</h1>
            <button onClick={addEvent}>Add</button>
        </>
    )
}

export default NewEvent