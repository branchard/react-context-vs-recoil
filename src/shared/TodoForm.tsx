import React, {useState} from "react";

const TodoForm = ({addTodo}: {addTodo: (text: string) => void}) => {
    const [text, setText] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e: any) => setText(e.target.value)}/>
            <button type="submit">Add todo</button>
        </form>
    );
};

export default TodoForm;
