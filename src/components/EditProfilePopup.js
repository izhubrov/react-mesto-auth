import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonSubmitText }) {
  const [name, setName] = React.useState("Name");
  const [description, setDescription] = React.useState("About");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeAbout(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({name, about: description})
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      buttonSubmitText={buttonSubmitText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__set">
        <label className="popup__field">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Имя"
            className="popup__input popup__input_type_name"
            required
            minLength="2"
            maxLength="40"
            onChange={handleChangeName}
          />
          <span className="popup__input-error popup__input-error_type_name"></span>
        </label>
        <label className="popup__field">
          <input
            type="text"
            name="about"
            value={description}
            placeholder="О себе"
            className="popup__input popup__input_type_about"
            required
            minLength="2"
            maxLength="200"
            onChange={handleChangeAbout}
          />
          <span className="popup__input-error popup__input-error_type_about"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
