import React from "react";
import TodoForm from "../shared/TodoForm";
import { useAddTodo } from "./TodosState";

const RecoilTodoForm = () => {
  const addTodo = useAddTodo();

  return <TodoForm addTodo={addTodo} />;
};

export default RecoilTodoForm;
