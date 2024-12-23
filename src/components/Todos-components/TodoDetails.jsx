import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { TodoContext } from '../Todos-components/TodosContext';
import TodoCSS from '../Todos-components/Todo.module.css'
import LogOutBtn from '../HomePage-components/LogOutBtn'

function TodoDetails() {
    
    const { id } = useParams(); 
    const navigate = useNavigate();
    const { todos, updateTodo, deleteTodo } = useContext(TodoContext);

    const todo = todos.find((item) => item.id === parseInt(id));
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState(todo);
   
    if (!todo) {
        return <h2>Todo not found</h2>;
    }

    const handleComplete = () => {
        if (typeof updateTodo === 'function') {
            updateTodo({...todo, todoStatus:'Completed'});
        } else {
            console.error('updateTodo is not function');
        }
   };

   const handleDelite = () => {
        if (typeof deleteTodo === 'function') {
        deleteTodo(todo.id);
        navigate('/todos');
         } else {
        console.error('deleteTodo is not a function');
         }
   };

   const handleEdit = () => {
    setIsEditing(true);
   };

   const handleSave = () => {
        if (typeof updateTodo === 'function'){
            updateTodo(editedTodo);
            setIsEditing(false);
        } else {
            console.error('updateTodo is not a function');
        }
   };

   const handleCancel = () => {
        setEditedTodo(todo);
        setIsEditing(false);
   };

    return (
        <div>
            {isEditing ? (
            <div className={TodoCSS.TodoDetailsContainerEdit}>
                <h1>Edit Your Todo</h1>
                <label>
                    Titel:
                    <input
                        type="text"
                        value={editedTodo.todoTitle}
                        onChange={(e) =>
                            setEditedTodo({...editedTodo, todoTitle: e.target.value })
                    }
                />
            </label>
            <label>
                Category:
                <select
                    value={editedTodo.todoCategory}
                    onChange={(e) =>
                        setEditedTodo({ ...editedTodo, todoCategory: e.target.value })

                    }
                >
                    <option value="Health">Health</option>
                    <option value="Housekeeping">HouseKeeping</option>
                    <option value="Job related">Job related</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
            </label>
            <label>
                Description:
                <textarea
                    value={editedTodo.todoDescription}
                    onChange={(e) =>
                        setEditedTodo({ ...editedTodo, todoDescription: e.target.value})

                        }
                    />
            </label>
            <label>
                Estemated Time:
                <input 
                    type="number"
                    value={editedTodo.todoEsTime}
                    onChange={(e) => 
                        setEditedTodo({ ...editedTodo, todoEsTime: e.target.value })

                        } 
               
                    />
                </label>
                <label>
                    Deadline:
                    <input 
                        type="date" 
                        value={editedTodo.todoDeadline}
                        onChange={(e) =>
                            setEditedTodo({ ...editedTodo, todoDeadline: e.target.value})

                        }
                />
            </label>
            <div className={TodoCSS.TodoDetailsEditButtons}>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
            
        </div>
    ) : (   
            
        <div className={TodoCSS.TodoDetailsContainer}>
            <h1>{todo.todoTitle}</h1>
            <p>Category: {todo.todoCategory}</p>
            <p>Description: {todo.todoDescription}</p>
            <p>Status: {todo.todoStatus}</p>
            <p>Estimated Time In Minutes: {todo.todoEsTime}</p>
            <p>Deadline: {todo.todoDeadline}</p>
            <div className={TodoCSS.TodoDetailsButtons}>
                <button onClick={handleComplete}> Completed</button>
                <button onClick={handleDelite}> Delete </button>
                <button onClick={handleEdit}> Edit </button>
            </div>
            <Link to="/todos"><button>&#8592;</button></Link>
            <LogOutBtn />
        </div>
    )}
    </div>
);

}

export default TodoDetails;