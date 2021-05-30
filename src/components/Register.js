import React from "react";
import PopupWithForm from "./PopupWithForm";

function Register({ isOpen, onRegister, buttonSubmitText }) {
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
  }, [isOpen]);

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
    onRegister({email, password});
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
    <PopupWithForm
      title="Регистрация"
      name="register"
      buttonSubmitText={buttonSubmitText}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonSubmitState={buttonSubmitState}
      isAuthForm= {true}
    >
      <fieldset className="popup__set">
        <label className="popup__field">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            className={`popup__input popup__input_type_auth ${!isEmailInputValid ? 'popup__input_type_error' : ''}`}
            required
            minLength="2"
            maxLength="40"
            onChange={handleChangeEmail}
          />
          <span className={`popup__input-error ${!isEmailInputValid ? 'popup__input-error_active' : ''}`}>{emailValidationMessage}</span>
        </label>
        <label className="popup__field">
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Пароль"
            className={`popup__input popup__input_type_auth ${!isPasswordInputValid ? 'popup__input_type_error' : ''}`}
            required
            minLength="8"
            maxLength="40"
            onChange={handleChangePassword}
          />
          <span className={`popup__input-error ${!isPasswordInputValid ? 'popup__input-error_active' : ''}`}>{passwordValidationMessage}</span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default Register;
