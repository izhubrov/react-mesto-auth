import React from "react";
import { Link, useLocation } from "react-router-dom";

function AuthForm({
  title,
  name,
  buttonSubmitText,
  onSubmit,
  email,
  password,
  setEmail,
  setPassword
}) {
  const location = useLocation();
  const isLocationSignUp = location.pathname === "/sign-up";
  const [isEmailInputValid, setEmailInputValid] = React.useState(true);
  const [isPasswordInputValid, setPasswordInputValid] = React.useState(true);
  const [emailValidationMessage, setEmailValidationMessage] = React.useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = React.useState('');
  const [buttonSubmitState, setButtonSubmitState] = React.useState(false);
  const [isEmailInputInitial, setEmailInputInitial] = React.useState(true);
  const [isPasswordInputInitial, setPasswordInputInitial] = React.useState(true);

  React.useEffect(() => {
    setButtonSubmitState(false);
    setEmailInputValid(true);
    setPasswordInputValid(true);
  }, []);

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    checkEmailValidation(evt.target);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
    checkPasswordValidation(evt.target);
  }

  //Валидация формы
  React.useEffect(()=> {
    if (isEmailInputValid && isPasswordInputValid && !isEmailInputInitial && !isPasswordInputInitial) {
      setButtonSubmitState(true);
    } else {
      setButtonSubmitState(false);
    }
  }, [isEmailInputValid, isPasswordInputValid, isEmailInputInitial, isPasswordInputInitial ]);

  function checkEmailValidation(inputElement) {
    setEmailInputInitial(false);
    if (!inputElement.validity.valid) {
      setEmailInputValid(false);
      setEmailValidationMessage(inputElement.validationMessage);
    } else {
      setEmailInputValid(true);
    }
  }

  function checkPasswordValidation(inputElement) {
    setPasswordInputInitial(false);
    if (!inputElement.validity.valid) {
      setPasswordInputValid(false);
      setPasswordValidationMessage(inputElement.validationMessage);
    } else {
      setPasswordInputValid(true);
    }
  }



  return (
    <div className="auth page__container appear">
        <h2 className="title title_place_auth">{title}</h2>

        <form
          className="form"
          name={`form-edit-${name}`}
          onSubmit={onSubmit}
          noValidate
        >
        <fieldset className="form__set">
        <label className="form__field">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            className={`form__input form__input_type_auth ${!isEmailInputValid ? 'form__input_type_error' : ''}`}
            required
            minLength="2"
            maxLength="40"
            onChange={handleChangeEmail}
          />
          <span className={`form__input-error ${!isEmailInputValid ? 'form__input-error_active' : ''}`}>{emailValidationMessage}</span>
        </label>
        <label className="form__field">
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Пароль"
            className={`form__input form__input_type_auth ${!isPasswordInputValid ? 'form__input_type_error' : ''}`}
            required
            minLength="8"
            maxLength="40"
            onChange={handleChangePassword}
          />
          <span className={`form__input-error ${!isPasswordInputValid ? 'form__input-error_active' : ''}`}>{passwordValidationMessage}</span>
        </label>
      </fieldset>
          
          {
            <button
            type="submit"
            className={`form__btn-submit form__btn-submit_type_auth ${!buttonSubmitState ? "form__btn-submit_inactive" : ""}`}
            disabled={!buttonSubmitState ? true : ""}
            >
            {buttonSubmitText}
          </button>
          }
          {isLocationSignUp && (
            <div className="form__auth-container">
              <p className="form__auth-text">Уже зарегистрированы?&nbsp;</p>
              <Link className="form__auth-link" to={"/sign-in"}>Войти</Link>
            </div>
          )}
        </form>
    </div>
  );
}

export default AuthForm;
