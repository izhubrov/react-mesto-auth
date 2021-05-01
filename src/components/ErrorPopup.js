import React from 'react';

function ErrorPopup({errorText, isActive}) {

  return (
    <div className={`error-popup ${ isActive ? 'error-popup__opened' : ''} `}>
      <h2 className="error-popup__title">Что-то пошло не так...</h2>
      <p className="error-popup__text">{errorText}</p>
    </div>
  );
}

export default ErrorPopup;