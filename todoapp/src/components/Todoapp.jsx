import Todoheader from "./Todoheader";

export default function Todoapp() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh'
        }}>
            <h1>
                Todo App
            </h1>
            <Todoheader />
        </div>
    );
}