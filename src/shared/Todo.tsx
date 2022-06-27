import React from "react";

const Todo = ({todo, toggleCompleted, remove}: { todo: Todo, toggleCompleted: (id: string) => void, remove: (id: string) => void}) => {
    const {id, text, completed} = todo;
    return (
        <li>
            <input
                type="checkbox"
                // @ts-ignore
                value={completed}
                onChange={() => toggleCompleted(id)}
            />
            &nbsp;
            <span style={{textDecoration: completed ? "line-through" : "none"}}>
                {text}
            </span>
            &nbsp;&nbsp;
            <button onClick={() => remove(id)}>Remove</button>
        </li>
    );
};

export default Todo;
