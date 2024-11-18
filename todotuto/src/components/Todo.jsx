import Footer from "./Footer";
import Form from "./Form"
import TodoList from "./TodoList";
import { useState } from "react"

export default function Todo() {
    const [todolist, setTodoList] = useState([]);
    const doneTodos = todolist.filter((todo) => todo.done === true).length;
    const totalTodos = todolist.length;
    return (
        <div>
            <Form todoList={todolist} setTodoList={setTodoList} />
            <TodoList todoList={todolist} setTodo={setTodoList} />
            <Footer completedTodo={doneTodos} totalTodo={totalTodos} />
        </div>
    )
}