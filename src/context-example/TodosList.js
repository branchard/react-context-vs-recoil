import React, { useContext } from "react";
import { TodosContext } from "./TodosContext";
import Todo from "./Todo";

const ContextTodosList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ContextTodosList;
