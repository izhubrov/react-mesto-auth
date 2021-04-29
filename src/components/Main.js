import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

export default function Main () {
  
//   const [isPopupActive,setPopupActive] = React.useState(false);  

  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup__flexed');
    setTimeout(()=> document.querySelector('.popup_type_avatar').classList.add('popup__opened'),0);
    // setPopupActive(!isPopupActive);
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_profile').classList.add('popup__flexed');
    setTimeout(()=> document.querySelector('.popup_type_profile').classList.add('popup__opened'),0);
    // setPopupActive(!isPopupActive);
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_card').classList.add('popup__flexed');
    setTimeout(()=> document.querySelector('.popup_type_card').classList.add('popup__opened'),0);
    // setPopupActive(!isPopupActive);
  }

  return (
    <main>
    <section className="profile page__container">
      <div className="profile__avatar" onClick={handleEditAvatarClick}></div>
      <div className="profile__info">
        <div className="profile__container">
          <h1 className="profile__name text-cut">Жак-Ив Кусто</h1>
          <button type="button" aria-label="Редактировать" className="profile__btn-edit" onClick={handleEditProfileClick}></button>
        </div>
      <p className="profile__about text-cut">Исследователь океана</p>
      </div>
      <button type="button" aria-label="Добавить" className="profile__btn-add" onClick={handleAddPlaceClick}></button>
    </section>

    <section className="places page__container">
      <ul className="cards">
      </ul>
    </section>
  </main>
  );

}

// ReactDOM.render((
//     <Main />
//   ), document.querySelector('.root'));