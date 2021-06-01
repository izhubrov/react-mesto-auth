import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const [name, setName] = React.useState("Name");
  const [description, setDescription] = React.useState("About");
  const [isNameInputValid, setNameInputValid] = React.useState(true);
  const [isAboutInputValid, setAboutInputValid] = React.useState(true);
  const [nameValidationMessage, setNameValidationMessage] = React.useState('');
  const [aboutValidationMessage, setAboutValidationMessage] = React.useState('');
  const [buttonSubmitState, setButtonSubmitState] = React.useState(false);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if(currentUser.name && currentUser.about) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
    setNameInputValid(true);
    setAboutInputValid(true);
  }, [currentUser, isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
    checkNameValidation(evt.target);
  }

  function handleChangeAbout(evt) {
    setDescription(evt.target.value);
    checkAboutValidation(evt.target);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({name, about: description})
  }

  //Валидация формы
  React.useEffect(()=> {
    if (isNameInputValid && isAboutInputValid) {
      setButtonSubmitState(true);
    } else {
      setButtonSubmitState(false);
    }
  }, [isNameInputValid, isAboutInputValid]);

  function checkNameValidation(inputElement) {
    if (!inputElement.validity.valid) {
      setNameInputValid(false);
      setNameValidationMessage(inputElement.validationMessage);
    } else {
      setNameInputValid(true);
    }
  }

  function checkAboutValidation(inputElement) {
    if (!inputElement.validity.valid) {
      setAboutInputValid(false);
      setAboutValidationMessage(inputElement.validationMessage);
    } else {
      setAboutInputValid(true);
    }
  }


  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      buttonSubmitText={isLoading? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonSubmitState={buttonSubmitState}
    >
      <fieldset className="form__set">
        <label className="form__field">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Имя"
            className={`form__input ${!isNameInputValid ? 'form__input_type_error' : ''}`}
            required
            minLength="2"
            maxLength="40"
            onChange={handleChangeName}
          />
          <span className={`form__input-error ${!isNameInputValid ? 'form__input-error_active' : ''}`}>{nameValidationMessage}</span>
        </label>
        <label className="form__field">
          <input
            type="text"
            name="about"
            value={description}
            placeholder="О себе"
            className={`form__input ${!isAboutInputValid ? 'form__input_type_error' : ''}`}
            required
            minLength="2"
            maxLength="200"
            onChange={handleChangeAbout}
          />
          <span className={`form__input-error ${!isAboutInputValid ? 'form__input-error_active' : ''}`}>{aboutValidationMessage}</span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
