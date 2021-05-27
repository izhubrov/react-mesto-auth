import React from "react";
import headerLogo from "../images/headerlogo.svg";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';


function Header() {
  const isLoggedIn = React.useContext(CurrentUserContext);

  return (
    <header className="header page__container">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип сайта с надписью Место Россия английскими буквами"
      />
      <p className="header__email">{isLoggedIn ? "email@mail.com" : "1234"}</p>
      <p className="header__auth-text">{isLoggedIn ? "123" : "1234"}</p>
    </header>
  );
}

export default Header;
