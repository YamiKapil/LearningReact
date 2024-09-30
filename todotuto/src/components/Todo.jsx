import Form from "./Form"
import TodoList from "./TodoList";
import { useState } from "react"

export default function Todo() {
    const [todolist, setTodoList] = useState([]);

    return (
        <div>
            <Form todoList={todolist} setTodoList={setTodoList} />
            <TodoList todoList={todolist} />
        </div>
    )
}