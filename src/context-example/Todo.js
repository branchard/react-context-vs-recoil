import React, { useContext } from "react";
import { TodosContext } from "./TodosContext";
import Todo from "../shared/Todo";

const ContextTodo = ({ todo }) => {
  const { toggleTodo } = useContext(TodosContext);
  return <Todo todo={todo} toggleCompleted={() => toggleTodo(todo.id)} />;
};

export default ContextTodo;
