import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

function Main ({onEditProfile, onAddPlace, onEditAvatar}) {
  

  return (
    <main>
    <section className="profile page__container">
      <div className="profile__avatar" onClick={onEditAvatar}></div>
      <div className="profile__info">
        <div className="profile__container">
          <h1 className="profile__name text-cut">Жак-Ив Кусто</h1>
          <button type="button" aria-label="Редактировать" className="profile__btn-edit" onClick={onEditProfile}></button>
        </div>
      <p className="profile__about text-cut">Исследователь океана</p>
      </div>
      <button type="button" aria-label="Добавить" className="profile__btn-add" onClick={onAddPlace}></button>
    </section>

    <section className="places page__container">
      <ul className="cards">
      </ul>
    </section>
  </main>
  );

}

export default Main;