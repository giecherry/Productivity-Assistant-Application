import { createContext, useState } from "react";


export const TodoContext = createContext();

export function TodoContextProvider ({children}) {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(localStorage.getItem("todos")) : [];
        
    });

    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        console.log("New todo added in local storage:", newTodo);
    };

    const updateTodo = (updatedTodo) => {
        const updatedTodos = todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    console.log("Todo updated in local storage:", updatedTodo);
    };

    const deleteTodo = (todoId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        console.log("Todo deleted from local storage:", todoId);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
}
