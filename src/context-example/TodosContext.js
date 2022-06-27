import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: uuidv4(),
        completed: false,
        text
      }
    ]);
  };

  const toggleTodo = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodosContext.Provider>
  );
};
