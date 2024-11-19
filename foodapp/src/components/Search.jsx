import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "01c8864ac2af44e4bc304fc55a53499c";

export default function Search() {
    /// always use hooks inside the components..
    const [query, setQuery] = useState("pizza");
    /// syntax of the useeffect
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            /// decoding the json data
            const data = await res.json();
            console.log(data.results);
        }
        fetchFood();
    }, [query]);
    return (
        <div>
            <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
            />
        </div>
    );
}