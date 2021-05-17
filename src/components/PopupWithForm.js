import React from "react";

function PopupWithForm({ title, name, buttonSubmitText, children, isOpen, onClose, onSubmit, buttonSubmitState }) {

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_form">
        <h2 className="popup__title">{title}</h2>
        <button type="button" aria-label="Закрыть" className="popup__btn-close" onClick={onClose}></button>
        <form className="popup__form" name={`form-edit-${name}`} onSubmit={onSubmit} noValidate>
          {children}
          <button type="submit" className={`popup__btn-submit ${!buttonSubmitState ? 'popup__btn-submit_inactive' :''}`} disabled={!buttonSubmitState ? true :''}>{buttonSubmitText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
