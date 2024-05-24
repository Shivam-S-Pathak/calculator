import Display from './components/display';
import ButtonsContainer from './components/ButtonsContainer';
import styles from './App.module.css';
import { useState } from 'react';

function App() {

  let [calVal, setcalVal] = useState("");


  const onButtonClick = (event) => {
    if (event.target.innerText === 'C') {
      setcalVal("");

    } else if (event.target.innerText === '=') {
      const result = eval(calVal);
      setcalVal(result);

    } else if (event.target.innerText === 'Del') {
      setcalVal(calVal.slice(0, -1));

    } else if (/[*+-/]/.test(event.target.innerText) && /[*+-/]/.test(calVal.slice(-1))) {
      setcalVal(calVal.slice(0, -1) + event.target.innerText);

    } else {
      const newDisplayValue = calVal + event.target.innerText;
      setcalVal(newDisplayValue);
    }
  };

  let buttonsList = [
    "1", "2", "C", "3", "4", "/", "5", "6", "*", "7", "8", "-", "9", ".", "+", "0", "=", "Del"
  ];

  return (
    <div className={styles.calculator}>
      <Display calVal={calVal} />
      <ButtonsContainer buttons={buttonsList} onButtonClick={onButtonClick} />
    </div>

  );
}

export default App
