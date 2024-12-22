import HomePageCSS from "./HomePage.module.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../Todos-components/TodosContext.jsx";
import { UserContext } from "../UserContext.jsx";


const TodosOverview = () => {
    const { todos } = useContext(TodoContext);
    const { inUser } = useContext(UserContext);

    const recentTodos = [...todos].filter(todo => todo.owner === inUser.userName).slice(-3).reverse();

    return (
        <>
        <div className={HomePageCSS.todosContainer}>
            <h1>Todos</h1>
            {recentTodos.length > 0 ? (
                <div>
                    {recentTodos.map((todo) => (
                        <div key={todo.id} className={HomePageCSS.todos}>
                            <h3>{todo.todoTitle}</h3>
                            <p>{todo.todoCategory}</p>
                            <p>{todo.todoDeadline}</p>
                        </div>
                    ))}
                </div>
            ) : (
            " "
            )}
            <Link to="/todos"><button>Show more</button></Link>
        </div>
            
        </>
    );
};

export default TodosOverview