import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todoList, setTodo }) {
    const sortedTodo = todoList.slice().sort((a, b) => Number(a.done) - Number(b.done));
    return <div className={styles.list}>
        {/* {todoList.map((item) => ( */}
        {sortedTodo.map((item) => (
            <TodoItem key={item.name} item={item} todosList={todoList} setTodo={setTodo} />
        ))}
    </div>
}