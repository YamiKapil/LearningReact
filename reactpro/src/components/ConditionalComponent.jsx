import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent({ condition }) {
    // const display = false;
    // if (condition) {
    //     return <Code></Code>
    // } else {
    //     return <Welcome />
    // }

    // rendering using element variables

    // let messageOne = <h1>This is message 1</h1>;
    // let messageTwo = <h1>This is message 2</h1>;
    // let message;
    const display = true;

    // if (display == true) {
    //     // return messageOne;
    //     message = <h1>This is message one</h1>
    // } else {
    //     // return messageTwo;
    //     message = <h1>This is message two</h1>
    // }
    // return message;

    /// return display ? <h1>message 1</h1> : <h1>message 2</h1>

    /// returning the components..
    return display ? <Welcome></Welcome> : <Code></Code>;


}