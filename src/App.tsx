import React from "react";
import {TodosProvider} from "./context-example/TodosContext";
import ContextTodoForm from "./context-example/TodoForm";
import ContextTodosList from "./context-example/TodosList";
import {RecoilRoot} from "recoil";
import RecoilTodoForm from "./recoil-example/TodoForm";
import RecoilTodosList from "./recoil-example/TodosList";

import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <div>
                <h1>Context</h1>
                <TodosProvider>
                    <ContextTodoForm/>
                    <ContextTodosList/>
                </TodosProvider>
            </div>
            <div>
                <h1>Recoil</h1>
                <RecoilRoot>
                    <RecoilTodoForm/>
                    <RecoilTodosList/>
                </RecoilRoot>
            </div>
        </div>
    );
}
