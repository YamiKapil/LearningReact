import styles from "./todoitem.module.css"

export default function TodoItem({ item, todosList, setTodo }) {
    function handleDelete(item) {
        console.log("Delete button clicked");
        setTodo(todosList.filter((todo) => todo !== item));
    }

    function handleClick(itemName) {
        const newArray = todosList.map((todo) => (todo.name === itemName) ? { ...todo, done: !todo.done } : todo);
        setTodo(newArray);
    }
    const isCompleted = item.done ? styles.completed : "";
    return (
        <div className={styles.item}>
            <div className={styles.itemName} >
                <span className={isCompleted} onClick={() => handleClick(item.name)}>
                    {item.name}
                </span>
                <span>
                    <button onClick={() => handleDelete(item)} className={styles.deleteButton} > X </button>
                </span>
            </div>
            <hr className={styles.line} />
        </div>
    );
}