import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  const seatNumbers = [1, 3, 4];
  // passing object to props
  const person = {
    name: "Yam",
    message: "Hello",
    seatNumbers: [1, 4, 9],
  }
  return <div>
    <Hello name='Rob'
      message="Hi there!"
      seatNumbers={seatNumbers}
      person={person}
    />
    <Fruits />
    <ConditionalComponent condition={true} />
    <Message />
    <Counter />
    <Form />
  </div>;
}

export default App;
