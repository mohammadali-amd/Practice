import useInput from "../hooks/use-inpur";

const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredValueIsName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(isNotEmpty)

  const {
    value: enteredLastName,
    isValid: enteredValueIsLastName,
    hasError: LastNameInputHasError,
    valueChangeHandler: LastNameChangeHandler,
    inputBlurHandler: LastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(isNotEmpty)

  const {
    value: enteredEmail,
    isValid: enteredValueIsEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemailInput
  } = useInput(isEmail)

  let formIsValid = false;

  if (enteredValueIsName && enteredValueIsEmail && enteredValueIsLastName) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredName, enteredLastName, enteredEmail);

    resetNameInput();
    resetemailInput();
    resetLastNameInput();
  };

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const LastNameInputClasses = LastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (<p className="error-text">Name must not be empty.</p>)}
        </div>

        <div className={LastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={LastNameChangeHandler}
            onBlur={LastNameBlurHandler}
            value={enteredLastName}
          />
          {LastNameInputHasError && (<p className="error-text">Last Name must not be empty.</p>)}
        </div>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (<p className="error-text">Email must not be empty.</p>)}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
