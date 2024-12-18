import FoodItem from "./FoodItem";

export default function FoodList({ foodData }) {
    return (
        <div>
            {foodData.map((foodItem) => (
                <FoodItem key={foodItem.id} food={foodItem} />
            ))}
        </div>
    );
}