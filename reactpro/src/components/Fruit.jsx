export default function Fruit({ name, price, soldout }) {
    // return <div>
    //     {fruit.name} {fruit.price}
    // </div>

    // adding the conditions to render specific fruits..
    // return <div>
    //     {price > 5 ? <li><h3>{name}</h3></li> : ""}
    // </div>

    // using the fragment  {eg: <> </>}
    // eg: 
    // return (
    //     <>
    //         {price > 5 ? <li><h3>{name}</h3></li> : ""}
    //     </>)

    // rendering the message using the ternary..
    return (
        <li>{name} {soldout ? '(item is soldout)' : ""}</li>
    )
}