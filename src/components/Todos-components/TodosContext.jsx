import { createContext, useState } from "react";


export const TodoContext = createContext();

export function TodoContextProvider ({children}){

    const [todos, setTodos] = useState(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        return savedTodos;
    });

    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        console.log("New todo added in local storage:", newTodo);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
}
﻿
