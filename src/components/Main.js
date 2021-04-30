import React from 'react';
// import ReactDOM from 'react-dom';
import '../index.css';
import {api} from '../utils/Api.js';
import Card from './Card.js';

function Main ({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onError}) {
  
  const [userInfo, setUserInfo] = React.useState({userName:'', userDescription:'', userAvatar:''});

  const [cards, setCards] = React.useState([]);

  React.useEffect(()=> {
    const promiseGetUser = api.getUser();
    const promiseGetCards = api.getCards();
    Promise.all([promiseGetUser, promiseGetCards])
    .then((arrayOfObjectsUserAndCards) => {
      setUserInfo({userName: arrayOfObjectsUserAndCards[0].name, userDescription: arrayOfObjectsUserAndCards[0].about, userAvatar: arrayOfObjectsUserAndCards[0].avatar});
      setCards(arrayOfObjectsUserAndCards[1]);
    })
    .catch((err) => onError(err));
  },[]);

  return (
    <main>
    <section className="profile page__container">
      <div className="profile__avatar" style={{backgroundImage: `url(${userInfo.userAvatar})`}} onClick={onEditAvatar}></div>
      <div className="profile__info">
        <div className="profile__container">
          <h1 className="profile__name text-cut">{userInfo.userName}</h1>
          <button type="button" aria-label="Редактировать" className="profile__btn-edit" onClick={onEditProfile}></button>
        </div>
      <p className="profile__about text-cut">{userInfo.userDescription}</p>
      </div>
      <button type="button" aria-label="Добавить" className="profile__btn-add" onClick={onAddPlace}></button>
    </section>

    <section className="places page__container">
      <ul className="cards">
        {cards.map((card) => {
          return (
          <div key={card._id}>
            <Card card={card} onCardClick={onCardClick} />
          </div>
          )
        })}
      </ul>
    </section>
  </main>
  );

}

export default Main;