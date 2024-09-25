import { useState } from "react"

export default function Form() {
    // const [name, setName] = useState("");
    // using the function...
    // function handleChange(e) {
    //     setName(e.target.value);
    // }

    // using object in the useState for multiple inputs
    const [name, setName] = useState({ firstName: "", lastName: "" });

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div>
            {name.firstName} - {name.lastName}
            <form>
                {/* <input onChange={(e) => handleChange(e)} type="text" value={name} /> */}
                <input
                    onChange={(e) => setName({ ...name, firstName: e.target.value })}
                    type="text"
                    value={name.firstName}
                />
                <input
                    onChange={(e) => setName({ ...name, lastName: e.target.value })}
                    type="text"
                    value={name.lastName}
                />
                <button onClick={(e) => handleSubmit(e)}>
                    Add
                </button>
            </form>
        </div>
    )
}