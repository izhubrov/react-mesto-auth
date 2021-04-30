function ErrorPopup({errorText}) {
  // openPopup(text) {
  //   this._popupElement.style.display = 'flex';
  //   this._errorTextElement.textContent = text;
  //   setTimeout(()=> {
  //     this._popupElement.classList.add('error-popup__opened');
  //     this._closePopup();
  //   },0);
  // }

  // _closePopup() {
  //   setTimeout(()=>{
  //     this._popupElement.classList.remove('error-popup__opened');
  //   }, 3500);
  // }

  function ShowAndHideErrorPopup(){
    return (
      'error-popup__opened'
      // setTimeout(()=>{'error-popup__opened'
      //     setTimeout(()=> '',3500)},0)
    )

  }

  console.log(ShowAndHideErrorPopup());

  return(
    // <div className={`error-popup ${errorText ? 'error-popup__flexed error-popup__opened' : ''}`}>
    <div className={`error-popup ${errorText ? `error-popup__flexed ${ShowAndHideErrorPopup()}` : ''}`}>
      <h2 className="error-popup__title">Что-то пошло не так...</h2>
      <p className="error-popup__text">{errorText}</p>
    </div>
  );
}

export default ErrorPopup;