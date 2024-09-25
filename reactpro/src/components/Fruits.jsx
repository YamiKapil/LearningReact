import Fruit from "./Fruit"

export default function Fruits() {

    // const fruits = ['Apple', 'Mango', 'Orange']
    // return <div>
    //     <ul>
    //         {fruits.map((fruit) => (
    //             <li>{fruit}</li>
    //         ))}
    //     </ul>
    // </div>
    const fruits = [
        { name: 'apple', price: 3, soldout: true },
        { name: 'banana', price: 50, soldout: false },
        { name: 'orange', price: 20, soldout: false },
        { name: 'mango', price: 15, soldout: false },
    ]
    return <div>
        <ul>
            {fruits.map((fruit) => (
                // <li key={fruit.name}>{fruit.name} {fruit.price}</li>
                <Fruit
                    key={fruit.name}
                    name={fruit.name}
                    price={fruit.price}
                    soldout={fruit.soldout}
                />
            ))}
        </ul>
    </div>
}