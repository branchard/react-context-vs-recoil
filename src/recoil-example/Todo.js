import React from "react";
import Todo from "../shared/Todo";
import { useToggleTodo } from "./TodosState";

const RecoilTodo = ({ todo }) => {
  const toggleTodo = useToggleTodo();

  return <Todo todo={todo} toggleCompleted={() => toggleTodo(todo.id)} />;
};

export default RecoilTodo;
