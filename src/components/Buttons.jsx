import styles from './Buttons.module.css'
const Buttons = ({ buttons, onButtonClick }) => {
    return <>
        {buttons.map((items) => (
            <button key={items} className={styles.button} onClick={onButtonClick}>{items}</button>
        ))}
    </>
}

export default Buttons;