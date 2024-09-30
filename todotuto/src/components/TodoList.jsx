import TodoItem from "./TodoItem";

export default function TodoList({ todoList }) {
    return <div>
        {todoList.map((item) => (
            <TodoItem key={item} item={item} />
        ))}
    </div>
}