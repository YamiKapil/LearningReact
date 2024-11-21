import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./app.css"

function App() {

  const [foodData, setFoodData] = useState([]);

  return (
    <div>
      <Nav />
      <Search foodData={foodData} setData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  )
}

export default App
