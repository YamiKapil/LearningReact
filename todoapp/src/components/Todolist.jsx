export default function Todolist({ task, id, onChange, }) {

    function checkHandle() {
        return onChange(id);
    }
    return (
        <ul style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}>
            <input type="checkbox" checked={task.isCompleted} onChange={checkHandle} />
            {task.text}
        </ul >
    )
}