import styles from "./display.module.css"

const Display = ({ calVal }) => {
    return <>
        <div className={styles.display}>
            <input type="text" className={styles.text} value={calVal} readonly />
        </div>
    </>
}

export default Display;