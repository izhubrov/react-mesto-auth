import React from "react";

function PopupWithForm({ title, name, buttonSubmitText, children, isOpen, onClose, onSubmit, buttonSubmitState, isAuthForm }) {

  return (
    <div className={`popup ${isAuthForm && "popup_type_auth"} ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container ${!isAuthForm ? 'popup__container_form' : 'popup__container_auth'}`}>
        <h2 className="popup__title">{title}</h2>
        {!isAuthForm && <button type="button" aria-label="Закрыть" className="popup__btn-close" onClick={onClose}></button>}
        <form className="popup__form" name={`form-edit-${name}`} onSubmit={onSubmit} noValidate>
          {children}
          <button type="submit" className={`popup__btn-submit ${isAuthForm && "popup__btn-submit_type_auth"} ${!buttonSubmitState ? 'popup__btn-submit_inactive' : ''}`} disabled={!buttonSubmitState ? true :''}>{buttonSubmitText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
