import React from "react";
import "../index.css";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onError }) {
  const [userInfo, setUserInfo] = React.useState({ userName: "", userDescription: "", userAvatar: "" });

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
      .then(([userData, cards]) => {
        setUserInfo({ userName: userData.name, userDescription: userData.about, userAvatar: userData.avatar });
        setCards(cards);
      })
      .catch((err) => {
        onError(err, true);
        setTimeout(() => onError(err, false), 5000);
      });
  }, []);

  return (
    <main>
      <section className="profile page__container">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${userInfo.userAvatar})` }}
          onClick={onEditAvatar}
        ></div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name text-cut">{userInfo.userName}</h1>
            <button type="button" aria-label="Редактировать" className="profile__btn-edit" onClick={onEditProfile}></button>
          </div>
          <p className="profile__about text-cut">{userInfo.userDescription}</p>
        </div>
        <button type="button" aria-label="Добавить" className="profile__btn-add" onClick={onAddPlace}> </button>
      </section>

      <section className="places page__container">
        <ul className="cards">
          {cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
