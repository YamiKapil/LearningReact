import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList";

function App() {

  const [foodData, setFoodData] = useState([]);

  return (
    <div>
      <Search foodData={foodData} setData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  )
}

export default App
