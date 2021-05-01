import headerLogo from '../images/headerlogo.svg';

function Header() {
  return (
    <header className="header page__container">
    <img className="header__logo" src={headerLogo} alt="Логотип сайта с надписью Место Россия английскими буквами" />
    </header>
  );
}

export default Header;