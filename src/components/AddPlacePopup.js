import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace, buttonSubmitText }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");
  const [isNameInputValid, setNameInputValid] = React.useState(true);
  const [isLinkInputValid, setLinkInputValid] = React.useState(true);
  const [nameValidationMessage, setNameValidationMessage] = React.useState('');
  const [linkValidationMessage, setLinkValidationMessage] = React.useState('');
  const [buttonSubmitState, setButtonSubmitState] = React.useState(false);
  const [isNameInputInitial, setNameInputInitial] = React.useState(true);
  const [isLinkInputInitial, setLinkInputInitial] = React.useState(true);

  function handleAddPlaceSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name, link });
  }

  function handleChangeTitle(evt) {
    setName(evt.target.value);
    checkNameValidation(evt.target);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
    checkLinkValidation(evt.target);
  }

  //Валидация формы
  React.useEffect(() => {
    setName('');
    setLink('');
    setNameInputValid(true);
    setLinkInputValid(true);
    setButtonSubmitState(false);
    setNameInputInitial(true);
    setLinkInputInitial(true);
  }, [isOpen]);

  React.useEffect(()=> {
    if (isNameInputValid && isLinkInputValid && !isNameInputInitial && !isLinkInputInitial) {
      setButtonSubmitState(true);
    } else {
      setButtonSubmitState(false);
    }
  }, [isNameInputValid, isLinkInputValid, isNameInputInitial, isLinkInputInitial ]);

  function checkNameValidation(inputElement) {
    if (!inputElement.validity.valid) {
      setNameInputInitial(false);
      setNameInputValid(false);
      setNameValidationMessage(inputElement.validationMessage);
    } else {
      setNameInputInitial(false);
      setNameInputValid(true);
    }
  }

  function checkLinkValidation(inputElement) {
    if (!inputElement.validity.valid) {
      setLinkInputInitial(false);
      setLinkInputValid(false);
      setLinkValidationMessage(inputElement.validationMessage);
    } else {
      setLinkInputInitial(false);
      setLinkInputValid(true);
    }
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="card"
      buttonSubmitText={buttonSubmitText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
      buttonSubmitState={buttonSubmitState}
    >
      <fieldset className="popup__set">
        <label className="popup__field">
          <input
            type="text"
            name="title"
            value={name}
            placeholder="Название"
            className={`popup__input ${!isNameInputValid ? 'popup__input_type_error' : ''}`}
            required
            minLength="2"
            maxLength="30"
            onChange={handleChangeTitle}
          />
          <span className={`popup__input-error ${!isNameInputValid ? 'popup__input-error_active' : ''}`}>{nameValidationMessage}</span>
        </label>
        <label className="popup__field">
          <input
            type="url"
            name="link"
            value={link}
            placeholder="Ссылка на картинку"
            className={`popup__input ${!isLinkInputValid ? 'popup__input_type_error' : ''}`}
            required
            onChange={handleChangeLink}
          />
          <span className={`popup__input-error ${!isLinkInputValid ? 'popup__input-error_active' : ''}`}>{linkValidationMessage}</span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
