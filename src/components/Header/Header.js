import React from 'react';
import './Header.css';
import signoutIconDark from '../../images/signout_icon.svg';
import signoutIconLight from '../../images/signout_icon_white.svg';

function Header({ loggedIn, username, isHome }) {
  return (
    <header className={`header ${isHome && 'header_theme_dark'}`}>
      <p className="header__logo">NewsExplorer</p>
      <ul className="header__links">
        <li className="header__links-item">
          <a
            href="googke.com"
            className={`content-text header__url ${
              isHome && 'header__url_theme_dark'
            }`}
          >
            Home
          </a>
          {isHome && <div className="header__underline" id="home"></div>}
        </li>
        {loggedIn && (
          <li className="header__links-item">
            <a
              href="gogle.com"
              className={`content-text header__url ${
                isHome && 'header__url_theme_dark'
              }`}
            >
              Saved articles
            </a>{' '}
            {!isHome && <div className="header__underline" id="saved"></div>}
          </li>
        )}
        {!loggedIn && (
          <li className="header__links-item">
            <button
              className={`content-text header__button ${
                isHome && 'header__button_theme_dark'
              }`}
              id="signin"
            >
              Sign in
            </button>
          </li>
        )}
        {loggedIn && (
          <li className="header__links-item">
            <button
              className={`content-text header__button ${
                isHome && 'header__button_theme_dark'
              }`}
              id="signout"
            >
              {username}{' '}
              <img
                className="header__signout-icon"
                src={isHome ? signoutIconLight : signoutIconDark}
                alt="Signout icon"
              ></img>
            </button>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
