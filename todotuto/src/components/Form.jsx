import { useState } from "react"
import styles from './form.module.css'

export default function Form({ todoList, setTodoList }) {
    // const [todo, setTodo] = useState("");
    // using object..
    const [todo, setTodo] = useState({ name: "", done: false });


    function handleSubmit(e) {
        e.preventDefault();
        setTodoList([...todoList, todo]);
        setTodo({ name: "", done: false });
    }
    return (
        <form onSubmit={handleSubmit} className={styles.todoform}>
            <div className={styles.inputContainer}>
                <input className={styles.modernInput} placeholder="Enter todo"
                    onChange={(e) => setTodo({ name: e.target.value, done: false })}
                    value={todo.name} type="text" />
                <button className={styles.modernButton} type="submit">
                    Add
                </button>
            </div>
        </form>

    )
}