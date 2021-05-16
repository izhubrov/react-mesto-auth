import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, buttonSubmitText }) {
  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({avatar: avatarRef.current.value});
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      buttonSubmitText={buttonSubmitText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__set">
        <label className="popup__field">
          <input
            ref={avatarRef}
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link"
            required
          />
          <span className="popup__input-error popup__input-error_type_link"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
