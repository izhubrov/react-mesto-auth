import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import ErrorPopup from './ErrorPopup.js';

function App() {

  const [isPopupFormOpen, setPopupOpened] = React.useState({isEditAvatarPopupOpen: false, isEditProfilePopupOpen: false, isAddPlacePopupOpen: false })
  
  const [selectedCard, setSelectedCard] = React.useState({});

  const [error, setError] = React.useState('');

  function handleEditAvatarClick() {
    setPopupOpened({...isPopupFormOpen, isEditAvatarPopupOpen: true });
  }

  function handleEditProfileClick() {
    setPopupOpened({...isPopupFormOpen, isEditProfilePopupOpen: true });
  }

  function handleAddPlaceClick() {
    setPopupOpened({...isPopupFormOpen, isAddPlacePopupOpen: true });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    Object.keys(isPopupFormOpen).forEach((item)=>setPopupOpened(isPopupFormOpen[item] = false));
    setSelectedCard({});
  }

  function setErrorPopup(errorText) {
    setError(errorText);
  }

  return (
    <div className="page">

      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onError={setErrorPopup}/>
      <Footer />
      <PopupWithForm title='Редактировать профиль' name='profile' buttonSubmitText='Сохранить' isOpen={isPopupFormOpen.isEditProfilePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__set">
          <label className="popup__field">
            <input type="text" name="name" placeholder="Имя" className="popup__input popup__input_type_name" required minLength="2" maxLength="40" />
            <span className="popup__input-error popup__input-error_type_name"></span>
          </label>

          <label className="popup__field">
            <input type="text" name="about" placeholder="О себе" className="popup__input popup__input_type_about" required minLength="2" maxLength="200" />
            <span className="popup__input-error popup__input-error_type_about"></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm title='Новое место' name='card' buttonSubmitText='Создать' isOpen={isPopupFormOpen.isAddPlacePopupOpen} onClose={closeAllPopups}>
      <fieldset className = "popup__set">
              <label className="popup__field">
                <input type="text" name="title" placeholder="Название" className="popup__input popup__input_type_title" required minLength="2" maxLength="30" />
                <span className="popup__input-error popup__input-error_type_title"></span>
              </label>
              <label className="popup__field">
                <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_type_link" required />
                <span className="popup__input-error popup__input-error_type_link"></span>
              </label>
            </fieldset>
      </PopupWithForm>

      <PopupWithForm title='Обновить аватар' name='avatar' buttonSubmitText='Сохранить' isOpen={isPopupFormOpen.isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className = "popup__set">
          <label className="popup__field">
            <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_type_link" required />
            <span className="popup__input-error popup__input-error_type_link"></span>
          </label>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm title='Вы уверены?' name='remove' buttonSubmitText='Да' />

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      <ErrorPopup errorText={error}/>

      <template className="card-template">
      <li className="cards__item">
        <img className="cards__image" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="" />
        <button type="button" aria-label="Удалить" className="cards__btn-remove"></button>
        <div className="cards__description">
          <h2 className="cards__title text-cut"></h2>
          <div className="cards__likes-container">
            <button type="button" aria-label="Нравится" className="cards__btn-like"></button>
            <div className="cards__likes-counter"></div>
          </div>
        </div>
      </li>
      </template>
      
    </div>
  );
}

export default App;
