import React from "react";

const Todo = ({ todo, toggleCompleted }) => {
  const { id, text, completed } = todo;

  return (
    <li>
      <input
        type="checkbox"
        value={completed}
        onChange={() => toggleCompleted(id)}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
    </li>
  );
};

export default Todo;
