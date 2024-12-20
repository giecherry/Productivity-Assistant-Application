/*import { useState } from "react";
import { useContext } from 'react';
import { TodoContext } from '../components/Todos-components/TodosContext.jsx';

/*Fråga om alla labels är rätt konstruerade och namngivna, då jag hittade i consolen 17 fel de va något med id:
      https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label*/
/*function TodosAndActivities() {
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

export default TodosAndActivities;*/

import { useEffect, useState } from "react";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../components/Todos-components/TodosContext.jsx';
import HomePageCSS from '../components/HomePage-components/HomePage.module.css'

function TodosAndActivities() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoCategory, setTodoCategory] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoStatus, setTodoStatus] = useState("");
  const [todoEsTime, setTodoEsTime] = useState("");
  const [todoDeadline, setTodoDeadline] = useState("");
  const [showList, setShowList] = useState(false);

  const { todos, addTodo } = useContext(TodoContext);

  function handleClick() {
    if (!todoTitle || !todoCategory || !todoDescription || !todoStatus || !todoEsTime || !todoDeadline) {
      alert("Please fill out all event details.");
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      owner: JSON.parse(sessionStorage.getItem("Inloggad user:")).userName,
      todoTitle,
      todoCategory,
      todoDescription,
      todoStatus,
      todoEsTime,
      todoDeadline,
    };

    addTodo(newTodo);
    alert("You've added a to-do");
  }

  useEffect(()=>{
    if (todos.length > 0)
    {
      setShowList(true)
    }}
  ,[todos])


  return (
    <div className={HomePageCSS.todosContainer}>
      <h1>Todo List - Activities</h1>
      
      <h2>Create new todo</h2>
      <div>
        <label htmlFor="todo-title">Title:</label>
        <input
          id="todo-title"
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="Enter todo here"
        />
        <br />
        <br />

        <label htmlFor="todo-category">Category:</label>
        <select
          id="todo-category"
          value={todoCategory}
          onChange={(e) => setTodoCategory(e.target.value)}
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="Health">Health</option>
          <option value="Housekeeping">Housekeeping</option>
          <option value="Job related">Job related</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <br />
        <br />

        <label htmlFor="todo-description">Description:</label>
        <input
          id="todo-description"
          type="text"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="todo-status">Status:</label>
        <select
          id="todo-status"
          value={todoStatus}
          onChange={(e) => setTodoStatus(e.target.value)}
        >
          <option value="" disabled>
            Select status
          </option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select>
        <br />
        <br />
        <label htmlFor="todo-estimated-time">Estimated time (in minutes):</label>
        <input
          id="todo-estimated-time"
          type="number"
          min={1}
          value={todoEsTime}
          onChange={(e) => setTodoEsTime(e.target.value)}
          placeholder="e.g., 30"
        />
        <br />
        <br />
        <label htmlFor="todo-deadline">Deadline:</label>
        <input
          id="todo-deadline"
          type="date"
          value={todoDeadline}
          onChange={(e) => setTodoDeadline(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleClick}>Add to list</button>
      </div>
      {showList?
      <ul>
        {console.log(todos)}
        {todos.map((todo) => (
          <div key={todo.id}>
            <h3> Title: {todo.todoTitle}</h3>
            <h3> Category: {todo.todoCategory}</h3>
            <h3> Description: {todo.todoDescription } </h3>
            <h3> Status: {todo.todoStatus}</h3>
            <h3> Estimated time in minutes: {todo.todoEsTime}</h3>
            <h3> Deadline: {todo.todoDeadline}</h3>
            {/*Kom ihåg att denna Navigerar / Tar oss till TodoDetails*/ }
            <Link to={`/todos/${todo.id}`}>View Details</Link>
          </div>
        ))}
      </ul>:
      <h2>No todos yet!</h2>
      }
    </div>
  );
}

export default TodosAndActivities;