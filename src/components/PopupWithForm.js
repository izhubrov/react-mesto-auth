function PopupWithForm({title, name, buttonSubmitText, children, isOpen, onClose}) {

  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup__flexed popup__opened' : ''}` }>
      <div className="popup__container popup__container_form">
        <h2 className="popup__title">{title}</h2>
        <button type="button" aria-label="Закрыть" className="popup__btn-close" onClick={onClose}></button>
        <form className="popup__form" name={`form-edit-${name}`} noValidate>
          {children}
          <button type="submit" className="popup__btn-submit">{buttonSubmitText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;