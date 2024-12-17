import { useState } from "react";

/*Fråga om alla labels är rätt konstruerade och namngivna, då jag hittade i consolen 17 fel de va något med id:
      https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label*/
function TodosAndActivities() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoCategory, setTodoCategory] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoStatus, setTodoStatus] = useState("");
  const [todoEsTime, setTodoEsTime] = useState("");
  const [todoDeadline, setTodoDeadline] = useState("");

  function addTodo(e) {
    e.preventDefault();
    console.log(todoTitle);
  }
  return (
    <div className="App">
      <h1>Todo List - Activities</h1>
      <h2>Ärende</h2>
      <h2>Lista med ärenden att utföra:</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
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
        <label htmlFor="Checkbox">Status - Completed</label>
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
        <button type="submit">Add to list</button>
      </form>
    </div>
  );
}

export default TodosAndActivities;
