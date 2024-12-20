import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { TodoContext } from '../Todos-components/TodosContext';

function TodoDetails() {
    //Vad kommer vi behöva för variablar
    //Denna hämtar id från URLen
    const { id } = useParams(); 
    const navigate = useNavigate();
    const { todos, updateTodo, deliteTodo } = useContext (TodoContext);

    const todo = todos.find((item) => item.id === parseInt(id));
   
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
    deliteTodo(todo.id);
    // kom ihåg denna för att Tas tillbaka till /todo
    navigate('/todo');
   };

   const handleEdit = () => {
    alert ('Edit');
   };

    return (
    <div>
        <h1>{todo.todoTitle}</h1>
        <p>Category: {todo.todoCategory}</p>
        <p>Description: {todo.todoDescription}</p>
        <p>Status: {todo.todoStatus}</p>
        <p>Estimated Time In Minutes: {todo.todoEsTime}</p>
        <p>Deadline: {todo.todoDeadline}</p>
        <button onClick={handleComplete}> Completed</button>
        <button onClick={handleDelite}> Delite </button>
        <button onClick={handleEdit}> Edit </button>
    </div>
 );
}

export default TodoDetails;