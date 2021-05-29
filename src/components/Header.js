import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import headerLogo from "../images/headerlogo.svg";


function Header({isLoggedIn, onSignIn, onSignOut}) {

  const location = useLocation();
  const isLocationSignIn = location.pathname === '/sign-in';

  function handleSignIn() {
    // onSignIn();
  }

  function handleSignOut() {
    onSignOut();
  }

  function handleRegister() {
    // onSignOut();
  }

  return (
    <header className="header page__container">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип сайта с надписью Место Россия английскими буквами"
      />
      <nav className="header__navbar">
        <p className="header__email">{isLoggedIn ? "email@mail.com" : ""}</p>
        
        { !isLocationSignIn ?
        <NavLink onClick={!isLoggedIn ? handleSignIn : handleSignOut} className="header__nav-item" activeClassName="header_nav-item_active" to={"/sign-in"}>{isLoggedIn ? "Выйти" : "Войти"}</NavLink>
        :
        <NavLink onClick={handleRegister} className="header__nav-item" activeClassName="header_nav-item_active" to={"/sign-up"}>{!isLoggedIn ? "Регистрация" : ""}</NavLink>
        }
      </nav>
    </header>
  );
}

export default Header;
