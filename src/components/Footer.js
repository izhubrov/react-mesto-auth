import React from 'react';
const Footer = React.memo(({isLoggedIn})=>{
  return (
      isLoggedIn && (
      <footer className="footer page__container">
      <p className="footer__author">&copy; 2021 Mesto Russia</p>
      </footer>
      )
  );
})

export default Footer;
