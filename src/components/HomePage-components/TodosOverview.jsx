import HomePageCSS from "./HomePage.module.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../Todos-components/TodosContext.jsx";


const TodosOverview = () => {
    const { todos } = useContext(TodoContext);

    const recentTodos = [...todos].slice(-3).reverse();

    return (
        <>
        <div className={HomePageCSS.todosContainer}>
            <h1>Todos Overview</h1>
            {recentTodos.length > 0 ? (
                <ul>
                    {recentTodos.map((todo) => (
                        <li key={todo.id}>
                            <h3>{todo.todoTitle}</h3>
                            <p>{todo.todoCategory}</p>
                            <p>{todo.todoDeadline}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No todos available</p>
            )}
            <Link to="/todos"><button>Show more</button></Link>
        </div>
            
        </>
    );
};

export default TodosOverview