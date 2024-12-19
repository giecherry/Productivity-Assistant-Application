import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { TodoContext } from '../Todos-components/TodosContext';

function TodoDetails() {
    //Vad kommer vi behöva för variablar
    //Denna hämtar id från URLen
    const { id } = useParams(); 
    const navigate = useNavigate();
    const { todos, updateTodo, deliteTodo } = useContext (TodoContext);

    return
    <div>
        <button> Status</button>
        <button> Delite </button>
        <button> Edit </button>
    </div>
}

export default TodoDetails;