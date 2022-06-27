import React from "react";
import { useRecoilValue } from "recoil";
import Todo from "./Todo";
import { todos } from "./TodosState";

const RecoilTodosList = () => {
  const todosList = useRecoilValue(todos);

  return (
    <ul>
      {todosList.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default RecoilTodosList;
