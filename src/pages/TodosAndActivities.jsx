

import { useEffect, useState } from "react";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../components/Todos-components/TodosContext.jsx';
import HomePageCSS from '../components/HomePage-components/HomePage.module.css'
import TodoCSS from '../components/Todos-components/Todo.module.css'


function TodosAndActivities() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoCategory, setTodoCategory] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoStatus, setTodoStatus] = useState("");
  const [todoEsTime, setTodoEsTime] = useState("");
  const [todoDeadline, setTodoDeadline] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
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
      todoEsTime: parseInt(todoEsTime, 10),
      todoDeadline,
    };

    addTodo(newTodo);
    alert("You've added a to-do");
  }

  useEffect(()=>{
    if (todos.length > 0) {
      setShowList(true)
    }}
  ,[todos]);

  const filteredAndSortedTodos = () => {
    let filteredTodos = [...todos];

    if (filterStatus) {
      filteredTodos = filteredTodos.filter(todo => todo.todoStatus === filterStatus);
    }

    if (filterCategory) {
      filteredTodos = filteredTodos.filter(todo => todo.todoCategory === filterCategory);
    }

    if (sortOption === "deadline-asc") {
      filteredTodos.sort((a, b) => new Date(a.todoDeadline) - new Date(b.todoDeadline));
    } else if (sortOption === "deadline-desc") {
      filteredTodos.sort((a, b) => new Date(b.todoDeadline) - new Date(a.todoDeadline));
    } else if (sortOption === "estime-asc") {
      filteredTodos.sort((a, b) => a.todoEsTime - b.todoEsTime);
    } else if (sortOption === "estime-desc") {
      filteredTodos.sort((a, b) => b.todoEsTime - a.todoEsTime);
    }else if (sortOption === "status") {
      filteredTodos.sort((a, b) => a.todoStatus.localeCompare(b.todoStatus));
    }

    return filteredTodos;
  };


  return (
    <div className={TodoCSS.TodosPageContainer}>
      <h1>Todo List - Activities</h1>
      <div className={TodoCSS.NewTodoContainer}>
        <h2>Create new todo</h2>
        <label htmlFor="todo-title">Title:</label>
        <input
          id="todo-title"
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="Enter todo here"
        />

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

        <label htmlFor="todo-description">Description:</label>
        <input
          id="todo-description"
          type="text"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        />

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

        <label htmlFor="todo-estimated-time">Estimated time (in minutes):</label>
        <input
          id="todo-estimated-time"
          type="number"
          min={1}
          value={todoEsTime}
          onChange={(e) => setTodoEsTime(e.target.value)}
          placeholder="e.g., 30"
        />

        <label htmlFor="todo-deadline">Deadline:</label>
        <input
          id="todo-deadline"
          type="date"
          value={todoDeadline}
          onChange={(e) => setTodoDeadline(e.target.value)}
        />

        <button onClick={handleClick}>Add to list</button>
      </div>

      
      <div className={TodoCSS.TodosFilters}>
        <label htmlFor="filter-status">Filter by Status:</label>
        <select
          id="filter-status"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="Completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
            </select>

            <label htmlFor="filter-category">Filter by Category:</label>
            <select
            id="filter-category"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="Health">Health</option>
              <option value="Housekeeping">Housekeeping</option>
              <option value="Job related">Job related</option>
              <option value="Entertainment">Entertainment</option>
            </select>

            <label htmlFor="sort-option">Sort By:</label>
            <select
            id="sort-option"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">None</option>
              <option value="deadline-asc">Deadline (Ascending)</option>
              <option value="deadline-desc">Deadline (Descending)</option>
              <option value="estime-asc">Estimated Time (Ascending)</option>
              <option value="estime-desc">Estimated Time (Descending)</option>
              <option value="status">Status</option>
            </select>
      </div>

      {showList ? (
        filteredAndSortedTodos().length > 0 ? (
        <ul>
          {filteredAndSortedTodos().map((todo) => (
            <li key={todo.id}>
              <h3>Title: {todo.todoTitle}</h3>
              <h3>Category: {todo.todoCategory}</h3>
              <h3>Description: {todo.todoDescription}</h3>
              <h3>Status: {todo.todoStatus}</h3>
              <h3>Estimated time in minutes: {todo.todoEsTime}</h3>
              <h3>Deadline: {todo.todoDeadline}</h3>
              <Link to={`/todos/${todo.id}`}><button>View Details</button></Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2>No todos match the current filter criteria!</h2>
        )
      ) : (
      <h2>No todos yet!</h2>
      )}
    </div>
  );
}

export default TodosAndActivities;