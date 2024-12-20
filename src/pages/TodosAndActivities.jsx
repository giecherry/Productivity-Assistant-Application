import { useState } from "react";
import { useContext } from 'react';
import { TodoContext } from '../components/Todos-components/TodosContext.jsx';

/*Fråga om alla labels är rätt konstruerade och namngivna, då jag hittade i consolen 17 fel de va något med id:
      https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label*/
function TodosAndActivities() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoCategory, setTodoCategory] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoStatus, setTodoStatus] = useState("");
  const [todoEsTime, setTodoEsTime] = useState("");
  const [todoDeadline, setTodoDeadline] = useState("");
  
  const {todos, addTodo} = useContext(TodoContext)

  function handleClick() {
    if (!todoTitle || !todoCategory || !todoDescription ||  !todoStatus ||  !todoEsTime || !todoDeadline) {
      alert("Please fill out all event details.");
      return;
  }
    const newTodo = { 
      id: todos.length+1,
      owner: JSON.parse(sesionstorage.getItem("Inloggad user:")).userName,
      todoTitle: todoTitle,
      todoCategory: todoCategory,
      todoDescription: todoDescription,
      todoStatus: todoStatus,
      todoEsTime: todoEsTime,
      todoDeadline: todoDeadline
    }

    addTodo(newTodo);
    alert("You've added a to do");  
    }
  
  return (
    <div className="App">
      <h1>Todo List - Activities</h1>
      <h2>Ärende</h2>
      <h2>Lista med ärenden att utföra:</h2>
      <ul>
        {todos.map((todo,i)=> (
          <div>
              <h3>{todo.todoTitle}</h3>
              <h3>{todo.todoStatus}</h3>
          </div>
        ))}
      </ul>
      <h2>Skapa nya ärenden</h2>
      <h3>Varje ärende ska innehålla följande:</h3>
      <label htmlFor="titel">Title: </label>
      <form onSubmit={() => addTodo()}>
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="Enter todo here"
        />
        <br />
        <br />
        <label htmlFor="kategori">Category: </label>
        <select
          name="kategori"
          id="kategori"
          onChange={(e) => setTodoCategory(e.target.value)}
        >
          <option value="1">Health</option>
          <option value="2">Housekeeping</option>
          <option value="3">Job related</option>
          <option value="4">Entertainment</option>
        </select>
        <br />
        <br />
        <label htmlFor="beskrivning">Description: </label>
        <input
          type="text"
          onChange={(e) => setTodoDescription(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          onChange={(e) => setTodoStatus(e.target.value)}
        >
          <option value="1">Completed</option>
          <option value="1">Uncompleted</option>
        </select>
        <br />
        <h4>Tidsestimat - Hur lång tid ärendet tar att utföra.</h4>
        <label htmlFor="tidsestimat">Estimated time: </label>
        <input
          placeholder="min"
          type="number"
          name=""
          min={1}
          onChange={(e) => setTodoEsTime(e.target.value)}
        />
        <h4>Deadline - Datum som det senast ska vara utfört.</h4>
        <label htmlFor="deadline">Deadline: </label>
        <input
          type="date"
          name=""
          id=""
          onChange={(e) => setTodoDeadline(e.target.value)}
        />
        <br />
        <br />
        <br />
        <button onClick={handleClick}>Add to list</button>
      </form>
    </div>
  );
}

export default TodosAndActivities;
