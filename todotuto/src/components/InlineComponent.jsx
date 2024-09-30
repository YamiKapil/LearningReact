// const header = { color: "blue", fontSize: "10px" };
import styles from './inlinecomponent.module.css';
export default function InlineComponent() {
    return (
        <div >
            {/* // inline style */}
            {/* <h1 style={header}>
                Inline Component
            </h1> */}

            {/* // css with the css style sheet file */}
            <h1 className={styles.header}>
                Css style page
            </h1>

            <h1>

            </h1>
        </div>
    )
}