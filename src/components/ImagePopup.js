function ImagePopup() {
  return (
    <div className="popup popup_type_img">
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" className="popup__btn-close"></button>
        <figure className="popup__figure">
          <img className="popup__image" src="" alt="" />
        <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;