import React, {useContext} from "react";
import {TodosContext} from "./TodosContext";
import Todo from "../shared/Todo";

const ContextTodo = ({todo}: any) => {
    const {toggleTodo, removeTodo} = useContext(TodosContext);
    return <Todo todo={todo} toggleCompleted={() => toggleTodo(todo.id)} remove={() => removeTodo(todo.id)}/>;
};

export default ContextTodo;
