import useInput from '../Hook/user-input';
const BasicForm = (props) => {

  //for FirstName field
  const {
        value: firstNameValue,
        valueChangeHandler: firstNameChangeHandler,
        valueBlurHandler: firstNameBlurHandler, 
        hasError: firstNameInputInValid, 
        enteredValueIsValid: enteredFirstNameIsValid,
        resetValue: resetFirstName} = useInput(firstName => firstName.trim() !== '');

  //for the last name field
  const {
    value: lastNameValue,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler, 
    hasError: lastNameInputInValid, 
    enteredValueIsValid: enteredLastNameIsValid,
    resetValue: resetlastName} = useInput(lastName => lastName.trim() !== '');

  //for the email field.

  const {
    value: emailValue,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler, 
    hasError: emailInputInValid, 
    enteredValueIsValid: enteredEmailIsValid,
    resetValue: resetEmail} = useInput(enteredEmail => enteredEmail.includes("@"));

  // the overall form control
  let formIsValid;
  
  if(enteredEmailIsValid && enteredFirstNameIsValid && enteredLastNameIsValid){
    formIsValid = true;
  }

  const fromSubmitHandler = (event) => {
    event.preventDefault();
    if(!formIsValid){
      return;
    }
    resetFirstName();
    resetlastName();
    resetEmail();

  }



  const firstNameClasses = firstNameInputInValid ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameInputInValid ? 'form-control invalid' : 'form-control';
  const emailClasses = emailInputInValid ? 'form-control invalid': 'form-control';
  return (
    <form autoComplete="off" onSubmit={fromSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange = {firstNameChangeHandler} onBlur = {firstNameBlurHandler} value = {firstNameValue}/>
          {firstNameInputInValid && <p className="error-text">Please add your first name, it is required</p>}
        </div>  
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange = {lastNameChangeHandler} onBlur = {lastNameBlurHandler} value = {lastNameValue}/>
          {lastNameInputInValid && <p className="error-text">Please add your Last name, it is required</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name' >E-Mail Address</label>
        <input type='text' id='name' value = {emailValue} onBlur = {emailBlurHandler} onChange = {emailChangeHandler}/>
        {emailInputInValid && <p className="error-text">That is not a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled = {!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
