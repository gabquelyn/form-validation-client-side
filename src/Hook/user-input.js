import { useState } from 'react';

const useInput = (validatorfn) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [valueIsTouched, setValueIsTouched] = useState(false);

    const enteredValueIsValid = validatorfn(enteredValue);
    const valueInputInValid = !enteredValueIsValid && valueIsTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      }

      const valueBlurHandler = () => {
        setValueIsTouched(true);
      }

      const reset = () => {
        setEnteredValue('');
        setValueIsTouched(false);
      }

      return{
        value: enteredValue,
        valueChangeHandler,
        valueBlurHandler,
        hasError: valueInputInValid,
        enteredValueIsValid,
        resetValue: reset
      }
    
}


export default useInput;