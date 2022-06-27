import {atom, useSetRecoilState} from "recoil";
import {v4 as uuidv4} from "uuid";

export const todos = atom<Todo[]>({
    key: "todos",
    default: []
});

export const useAddTodo = () => {
    const setTodos = useSetRecoilState(todos);

    return (text: string) => {
        setTodos(prevTodos => [
            ...prevTodos,
            {
                id: uuidv4(),
                completed: false,
                text
            }
        ]);
    };
};

export const useToggleTodo = () => {
    const setTodos = useSetRecoilState(todos);

    return (id: string) => {
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {
                    ...todo,
                    completed: !todo.completed
                } : todo
            )
        );
    };
};

export const useRemoveTodo = () => {
    const setTodos = useSetRecoilState(todos);

    return (id: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };
};
