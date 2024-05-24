import styles from './ButtonsContainer.module.css';
import Buttons from './Buttons';
const ButtonsContainer = ({buttons , onButtonClick})=>{
    return <div className={styles.buttonsContainer}>
    <Buttons buttons={buttons} onButtonClick={onButtonClick}/>
  </div>
}

export default ButtonsContainer;