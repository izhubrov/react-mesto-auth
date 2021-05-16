import React from "react";
import headerLogo from "../images/headerlogo.svg";

const Header = React.memo(()=>{
  return (
    <header className="header page__container">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип сайта с надписью Место Россия английскими буквами"
      />
    </header>
  );
})

export default Header;
