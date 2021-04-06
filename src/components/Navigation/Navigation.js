import React from 'react';
import './Navigation.css';
import signoutIconDark from '../../images/signout_icon.svg';
import signoutIconLight from '../../images/signout_icon_white.svg';

function Navigation({ loggedIn, username, isHome }) {
  return (
    <header className={`navigation ${isHome && 'navigation_theme_dark'}`}>
      <p className="navigation__logo">NewsExplorer</p>
      <ul className="navigation__links">
        <li className="navigation__links-item">
          <a
            href="googke.com"
            className={`content-text navigation__url ${
              isHome && 'navigation__url_theme_dark'
            }`}
          >
            Home
          </a>
          {isHome && <div className="navigation__underline" id="home"></div>}
        </li>
        {loggedIn && (
          <li className="navigation__links-item">
            <a
              href="gogle.com"
              className={`content-text navigation__url ${
                isHome && 'navigation__url_theme_dark'
              }`}
            >
              Saved articles
            </a>{' '}
            {!isHome && (
              <div className="navigation__underline" id="saved"></div>
            )}
          </li>
        )}
        {!loggedIn && (
          <li className="navigation__links-item">
            <button
              className={`content-text navigation__button ${
                isHome && 'navigation__button_theme_dark'
              }`}
              id="signin"
            >
              Sign in
            </button>
          </li>
        )}
        {loggedIn && (
          <li className="navigation__links-item">
            <button
              className={`content-text navigation__button ${
                isHome && 'navigation__button_theme_dark'
              }`}
              id="signout"
            >
              {username}{' '}
              <img
                className="navigation__signout-icon"
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

export default Navigation;
