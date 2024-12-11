import CreateNewHabit from "../components/Habit-components/CreateNewHabit"

const Habits = () => {
    return (
        <>
            <div className="HabitHome">
                <h1 className="HabitHOne">Habits</h1>
                <CreateNewHabit />
            </div>
        </>
    )
}

export default Habits