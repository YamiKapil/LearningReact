import { useState } from "react"
import styles from './form.module.css'

export default function Form({ todoList, setTodoList }) {
    const [todo, setTodo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setTodoList([...todoList, todo]);
        setTodo("");
    }
    return (
        <form onSubmit={handleSubmit} className={styles.todoform}>
            <div className={styles.inputContainer}>
                <input className={styles.modernInput} placeholder="Enter todo" onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
                <button className={styles.modernButton} type="submit">
                    Add
                </button>
            </div>
        </form>

    )
}