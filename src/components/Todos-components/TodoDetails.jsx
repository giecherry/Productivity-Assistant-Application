import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { TodoContext } from '../Todos-components/TodosContext';
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
        alert ('Edit');
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
            <div>
                <h1>Edit Your Todo</h1>
                <label>
                    Titel:
                    <input
                        type="text"
                        value={editedTodo.todoTitle}
                        onChange={(e) =>
                            setEditedTodo({...editedTodo, TodoTitle: e.target.value })
                    }
                />
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
                    Category:
                    <input
                        type="text"
                        value={editedTodo.todoCategory}
                        onChange={(e) =>
                         setEditedTodo({ ...editedTodo, todoCategory: e.target.value })

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
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    ) : (   
            
        <div>
            <h1>{todo.todoTitle}</h1>
            <p>Category: {todo.todoCategory}</p>
            <p>Description: {todo.todoDescription}</p>
            <p>Status: {todo.todoStatus}</p>
            <p>Estimated Time In Minutes: {todo.todoEsTime}</p>
            <p>Deadline: {todo.todoDeadline}</p>
            <button onClick={handleComplete}> Completed</button>
            <button onClick={handleDelite}> Delete </button>
            <button onClick={handleEdit}> Edit </button>
            <br />
            <br />
            <LogOutBtn />
            <br />
            <Link to="/home"><button>&#8592;</button></Link>
        </div>
    )}
    </div>
);

}

export default TodoDetails;