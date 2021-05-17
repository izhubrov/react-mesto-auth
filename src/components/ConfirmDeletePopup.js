import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function ConfirmDeletePopup({isOpen, onClose, card, onSubmitDelete, buttonSubmitText }) {

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmitDelete(card);
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="remove"
      buttonSubmitText={buttonSubmitText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonSubmitState="true"
    />
  );
}

export default ConfirmDeletePopup;
