import React from "react";
import Todo from "../shared/Todo";
import {useToggleTodo, useRemoveTodo} from "./TodosState";

const RecoilTodo = ({todo}: any) => {
    const toggleTodo = useToggleTodo();
    const removeTodo = useRemoveTodo();

    return <Todo todo={todo} toggleCompleted={() => toggleTodo(todo.id)} remove={() => removeTodo(todo.id)}/>;
};

export default RecoilTodo;
