import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  //object destructuring and using of alias.
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangeHandler, 
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput} = useInput(value => value.trim() !== '');


    const {value: enteredEmail, 
          isvalid: enteredEmailIsValid, 
          hasError: emailInputHasError, 
          valueChangeHandler: emailChangeHandler, 
          inputBlurHandler: emailBlurHandler,
          reset: resetEmailInput } = useInput(value => value.includes("@"))
  
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredemailTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  
  // const enteredEmailIsValid = enteredEmail.includes("@");
  // const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched;
  //assuming we want to try for the form validity
  let formIsValid;

    if(enteredNameIsValid && enteredEmailIsValid){//and all other conditions
        formIsValid = true;
    }

  // const inputNameHandler = (event) => {
  //     setEnteredName(event.target.value);
  // }

  // const inputEmailHandler = event => {
  //   setEnteredEmail(event.target.value);
  // }

  // const nameInputBlurHandler = event =>{
  //   setEnteredNameTouched(true);
  // }

  // const emailInputBlurHandler = event => {
  //   setEnteredemailTouched(true);
  // }


  const formSubmisionHandler = (e) => {
    e.preventDefault();

    // setEnteredNameTouched(true);
    // setEnteredemailTouched(true);
    if(!enteredNameIsValid || !enteredEmailIsValid){
      return;
    }
    // setEnteredName('');
    // setEnteredNameTouched(false);

    resetNameInput();
    // setEnteredEmail('');
    // setEnteredemailTouched(false);
    resetEmailInput();
  };


  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid': 'form-control';
  return (
    <form onSubmit = {formSubmisionHandler} autoComplete = 'off'>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} value = {enteredName}  onBlur={nameBlurHandler}/>
      </div>
      {nameInputHasError && <p className = 'error-text'>Name must not be empty.</p>}
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input type ='email' id = 'email' onChange={emailChangeHandler} value = {enteredEmail} onBlur = {emailBlurHandler}/>
        {emailInputHasError && <p className = 'error-text'>This is not a valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled = {!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
