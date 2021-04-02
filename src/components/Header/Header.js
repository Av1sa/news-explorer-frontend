import React from 'react';
import './Header.css';

function Header({ loggedIn }) {
  return (
    <header className="header">
      <p className="header__logo">NewsExplorer</p>
      <p></p>
    </header>
  );
}

export default Header;
