import GreetingAndQuote from "../components/HomePage-components/Greeting-quote"
import CalendarOverview from "../components/HomePage-components/CalendarOverview"
import HabitsOverview from "../components/HomePage-components/HabitsOverview"
import TodosOverview from "../components/HomePage-components/TodosOverview"
import HomePageCSS from "../components/HomePage-components/HomePage.module.css"
import LogOutBtn from "../components/HomePage-components/LogOutBtn"

const HomePage = () => {
    return (
        <>
            <div>
                <GreetingAndQuote/>
                <div className={HomePageCSS.overviewContainer}>
                    <CalendarOverview/>
                    <HabitsOverview/>
                    <TodosOverview/>
                </div>
                <LogOutBtn/>
            </div>
        </>
    )  
}

export default HomePage
