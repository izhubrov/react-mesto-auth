import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="page">

      <Header />
      <Main />
      <Footer />



      <div className="popup popup_type_profile">
        <div className="popup__container popup__container_form">
          <h2 className="popup__title">Редактировать профиль</h2>
          <button type="button" aria-label="Закрыть" className="popup__btn-close"></button>
          <form className="popup__form" name="form-edit-profile" noValidate>
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
            <button type="submit" className="popup__btn-submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_card">
        <div className="popup__container popup__container_form">
          <h2 className="popup__title">Новое место</h2>
          <button type="button" aria-label="Закрыть" className="popup__btn-close"></button>
          <form className="popup__form" name="form-add-card" noValidate>
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
            <button type="submit" className="popup__btn-submit">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_img">
        <div className="popup__container">
          <button type="button" aria-label="Закрыть" className="popup__btn-close"></button>
          <figure className="popup__figure">
            <img className="popup__image" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="Архыз" />
          <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container popup__container_form">
          <h2 className="popup__title">Обновить аватар</h2>
          <button type="button" aria-label="Закрыть" className="popup__btn-close"></button>
          <form className="popup__form" name="form-edit-avatar" noValidate>
            <fieldset className = "popup__set">
              <label className="popup__field">
                <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_type_link" required />
                <span className="popup__input-error popup__input-error_type_link"></span>
              </label>
            </fieldset>
            <button type="submit" className="popup__btn-submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_remove">
        <div className="popup__container popup__container_form">
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="button" aria-label="Закрыть" className="popup__btn-close"></button>
          <form className="popup__form" name="form-edit-remove" noValidate>
            <button type="submit" className="popup__btn-submit">Да</button>
          </form>
        </div>
      </div>

      <div className="error-popup">
        <h2 className="error-popup__title">Что-то пошло не так...</h2>
        <p className="error-popup__text"></p>
      </div>

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
