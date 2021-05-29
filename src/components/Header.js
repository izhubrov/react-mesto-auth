import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import headerLogo from "../images/headerlogo.svg";


function Header({isLoggedIn, userEmail, onSignOut}) {

  const location = useLocation();
  const isLocationSignIn = location.pathname === '/sign-in';
  const [isColumnMenu, setColumnMenu] = React.useState(false);

  function handleSignOut() {
    onSignOut();
  }

  function handleSignIn() {
  }

  function handleMenuClick() {
    setColumnMenu(true);
  }

  function handleCloseMenu() {
    setColumnMenu(false);
  }

  return (
    <header className={`header ${!isColumnMenu ? "page__container" : ""} ${isColumnMenu ? "header_columned" : ""}`}>
      <div className={`header__logo-container ${isColumnMenu ? "header__logo-container_type_column" : ""}`}>
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип сайта с надписью Место Россия английскими буквами"
      />
      <button onClick={handleCloseMenu} type="button" aria-label="Закрыть меню" className={`header__btn-close ${isColumnMenu ? "header__btn-close_type_active" : ""}`}></button>
      </div>
      <div onClick={handleMenuClick} className= {`header__btn-menu ${isColumnMenu ? "header__btn-menu_type_inactive" : ""}`}>
        <div className="header__burger-line"></div>
        <div className="header__burger-line"></div>
        <div className="header__burger-line"></div>
      </div>
      <nav className={`header__nav-container ${isLoggedIn && !isColumnMenu ? "header__nav-container_type_inactive" : ""} ${isColumnMenu ? "header__nav-container_type_column" : ""} `}>
        <p className="header__email">{isLoggedIn ? userEmail : ""}</p>
          { !isLocationSignIn ?
          <NavLink onClick={!isLoggedIn ? handleSignIn : handleSignOut} className="header__nav-item" activeClassName="header_nav-item_active" to={"/sign-in"}>{isLoggedIn ? "Выйти" : "Войти"}</NavLink>
          :
          <NavLink className="header__nav-item" activeClassName="header_nav-item_active" to={"/sign-up"}>{!isLoggedIn ? "Регистрация" : ""}</NavLink>
          }
      </nav>

    </header>
  );
}

export default Header;
