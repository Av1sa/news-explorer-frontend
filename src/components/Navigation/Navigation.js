import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import signoutIconDark from '../../images/signout_icon.svg';
import signoutIconLight from '../../images/signout_icon_white.svg';

function Navigation({ username, loggedIn, isHome, onClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`navigation ${isHome && 'navigation_theme_dark'} ${
        menuOpen && 'navigation__menu-open'
      } ${menuOpen && isHome && 'navigation__menu-open_theme_dark'}`}
    >
      <Link
        className={`navigation__logo ${
          isHome && 'navigation__logo_theme_dark'
        }`}
        to="/"
      >
        NewsExplorer
      </Link>
      <ul
        className={`navigation__links ${
          isHome && 'navigation__links_theme_dark'
        } ${menuOpen && 'navigation__links-menu-open'} ${
          isHome && menuOpen && 'navigation__links-menu-open_theme_dark'
        }`}
      >
        {/* Home */}
        <li className="navigation__links-item">
          <Link
            to="/"
            className={`content-text navigation__url ${
              isHome && 'navigation__url_theme_dark'
            }`}
          >
            Home
          </Link>
          {isHome && <div className="navigation__underline" id="home" />}
        </li>
        {/* Saved Articles */}
        {loggedIn && (
          <li className="navigation__links-item">
            <Link
              to="/saved-news"
              className={`content-text navigation__url ${
                isHome && 'navigation__url_theme_dark'
              }`}
            >
              Saved articles
            </Link>{' '}
            {!isHome && <div className="navigation__underline" id="saved" />}
          </li>
        )}
        {/* Sign in */}
        {!loggedIn && (
          <li className="navigation__links-item">
            <button
              type="button"
              className={`content-text navigation__button ${
                isHome && 'navigation__button_theme_dark'
              }`}
              id="signin"
              onClick={onClick}
            >
              Sign in
            </button>
          </li>
        )}
        {/* Sign out  */}
        {loggedIn && (
          <li className="navigation__links-item">
            <button
              type="button"
              className={`content-text navigation__button ${
                isHome && 'navigation__button_theme_dark'
              }`}
              id="signout"
            >
              {username}
              <img
                className="navigation__signout-icon"
                src={isHome ? signoutIconLight : signoutIconDark}
                alt="Signout icon"
              />
            </button>
          </li>
        )}
      </ul>
      {/* Hamburger menu */}
      <div
        className={`navigation__hamburger ${
          isHome && 'navigation__hamburger_theme_dark'
        } ${menuOpen && 'navigation__hamburger-close'} ${
          menuOpen && isHome && 'navigation__hamburger-close_theme_dark'
        }`}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      />
    </nav>
  );
}

export default Navigation;
