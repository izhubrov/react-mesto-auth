function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_img ${
        card.link ? "popup__flexed popup__opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__btn-close"
          onClick={onClose}
        ></button>
        <figure className="popup__figure">
          <img className="popup__image" src={`${card.link}`} alt="" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
