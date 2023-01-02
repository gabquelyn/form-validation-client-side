import { useState } from 'react';

const useInput = (validateValue) =>{
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue); //make the validator condition configurable from outside.
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }
    const inputBlurHandler = event =>{
        setIsTouched(true);
      }

    const reset = () =>{
        setEnteredValue('');
        setIsTouched(false);
    }

    return{
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset //This is the alias in vanilla Javascript, it spreads to hasError: hasError, valueChangeHandler: valueChangeHandler, inputBlurHandler: InputBlurHandler
    }
};

export default useInput;