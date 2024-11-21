/// note: use state variable to store the data..
/// note: create the state variable in the app component so we can access it from anywhere
import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "01c8864ac2af44e4bc304fc55a53499c";

export default function Search({ foodData, setData }) {
    /// always use hooks inside the components..
    const [query, setQuery] = useState("pizza");
    /// syntax of the useeffect
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            /// decoding the json data
            const data = await res.json();
            console.log(data.results);
            setData(data.results);
        }
        fetchFood();
    }, [query]);
    return (
        <div className={styles.searchContainer}>
            <input className={styles.input}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
            />
        </div>
    );
}