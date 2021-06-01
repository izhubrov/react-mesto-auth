import React from "react";
import AuthForm from "./AuthForm";
import CssLoader from "./CssLoader.js";

function Login({ onLogin, isLoading }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
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

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({email, password})
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
    <>
    <CssLoader isLoading={isLoading} />
    {!isLoading && 
    <AuthForm
      title="Вход"
      name="login"
      buttonSubmitText="Войти"
      onSubmit={handleSubmit}
      buttonSubmitState={buttonSubmitState}
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
    </AuthForm>
    }
    </>
  );
}

export default Login;
