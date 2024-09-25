// const name = 'rob';

// function displayMessage() {
//     return 'Wow';
// }

// props are immutable.. 
// cannot change the value of the props

function Hello({ name, message, seatNumbers, person }) {
    return <div>
        <h1>
            {message} {name} {seatNumbers} {person.name}
        </h1>
    </div>
}

export default Hello;


