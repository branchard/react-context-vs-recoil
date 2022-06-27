import React, {useContext} from "react";
import {TodosContext} from "./TodosContext";
import TodoForm from "../shared/TodoForm";

const ContextTodoForm = () => {
    const {addTodo} = useContext(TodosContext);

    return <TodoForm addTodo={addTodo}/>;
};

export default ContextTodoForm;
