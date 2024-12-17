import CreateNewHabit from "../components/Habit-components/CreateNewHabit"

const [ifNoOther] = useState([
    {
        title: "Clean",
        priority: "High",
    },
    {
        title: "Train",
        priority: "Medium",
    },
    {
        title: "Paint",
        priority: "Low",
    }
]);

const Habits = () => {
    return (
        <>
            <div className="HabitHome">
                <h1 className="HabitHOne">Habits</h1>

                <h5>Go to your habits<Link to="/createNewHabit" element= {<CreateNewHabit />} >Sign up!</Link></h5>
                
            </div>
        </>
    )
}

export default Habits