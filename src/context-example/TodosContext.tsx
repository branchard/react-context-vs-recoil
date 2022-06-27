import React, {createContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

type Context = {
    todos: Todo[]
    addTodo: (text: string) => void
    toggleTodo: (id: string) => void
    removeTodo: (id: string) => void
}

export const TodosContext = createContext<Context>({} as Context);

export const TodosProvider = ({children}: any) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                id: uuidv4(),
                completed: false,
                text
            }
        ]);
    };

    const toggleTodo = (id: string) => {
        setTodos(prevTodos => prevTodos.map((todo) => todo.id === id ? {
                    ...todo,
                    completed: !todo.completed
                } : todo
            )
        );
    };

    const removeTodo = (id: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    return (
        <TodosContext.Provider value={{todos, addTodo, toggleTodo, removeTodo}}>
            {children}
        </TodosContext.Provider>
    );
};
