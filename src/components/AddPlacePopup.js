import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace, buttonSubmitText }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleAddPlaceSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name, link });
  }

  function handleChangeTitle(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="card"
      buttonSubmitText={buttonSubmitText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <fieldset className="popup__set">
        <label className="popup__field">
          <input
            type="text"
            name="title"
            value={name}
            placeholder="Название"
            className="popup__input popup__input_type_title"
            required
            minLength="2"
            maxLength="30"
            onChange={handleChangeTitle}
          />
          <span className="popup__input-error popup__input-error_type_title"></span>
        </label>
        <label className="popup__field">
          <input
            type="url"
            name="link"
            value={link}
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link"
            required
            onChange={handleChangeLink}
          />
          <span className="popup__input-error popup__input-error_type_link"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
