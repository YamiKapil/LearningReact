import { useState } from "react";
import Todolist from "./Todolist";

export default function Todoheader() {
    const [todoList, setTask] = useState([]);
    const [text, setText] = useState("");

    function addToList(e) {
        e.preventDefault();
        const data = { text: text, isCompleted: false }
        setTask([...todoList, data])
        setText("")
    }

    function onCheckChange(id) {
        setTask(todoList.map((task, index) => {
            if (index == id) {
                return { ...task, isCompleted: !task.isCompleted };
            } else {
                return task;
            }
        }))

    }
    const completedTasksCount = todoList.filter(task => task.isCompleted).length;
    return (

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh'
        }}>
            <div style={{ alignItems: "flex-start", width: "100vh" }}>
                Total Task: {todoList.length}
            </div>
            <div style={{ alignItems: "flex-start", width: "100vh" }}>
                Task Completed: {completedTasksCount}
            </div>
            <form >
                <input onChange={(e) => setText(e.target.value)} type="text" value={text} />
                <button onClick={(e) => addToList(e)}>
                    Add
                </button>
            </form>
            <span>
                <br />
            </span>
            <ul>
                {todoList.map((e, index) =>
                (
                    <Todolist
                        key={index}
                        task={e}
                        id={index}
                        onChange={onCheckChange}
                    />
                )
                )}
            </ul>

        </div>
    );
}