import HomePageCSS from "./HomePage.module.css"
import { Link } from "react-router-dom";


const TodosOverview = () => {
    return (
        <>
        <div className={HomePageCSS.todosContainer}>
            <h1>Todos Overview</h1>
            <Link to="/todos"><button>Show more</button></Link>
        </div>
            
        </>
    )
}

export default TodosOverview