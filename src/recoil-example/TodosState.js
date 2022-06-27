import { atom, useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const todos = atom({
  key: "todos",
  default: []
});

export const useAddTodo = () => {
  const setTodos = useSetRecoilState(todos);

  const addTodo = text => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: uuidv4(),
        completed: false,
        text
      }
    ]);
  };

  return addTodo;
};

export const useToggleTodo = () => {
  const setTodos = useSetRecoilState(todos);

  const toggleTodo = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return toggleTodo;
};
