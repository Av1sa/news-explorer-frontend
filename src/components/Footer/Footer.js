import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import fbIcon from '../../images/facebook_icon.svg';
import ghIcon from '../../images/github_icon.svg';

function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      <ul className="footer__list">
        <ul className="footer__links">
          <li className="footer__links-item">
            <Link to="/" className="content-text footer__url">
              Home
            </Link>
          </li>
          <li className="footer__links-item">
            <a
              href="http://practicum.yandex.com/"
              className="content-text footer__url"
              target="_blank"
              rel="noreferrer"
            >
              Practicum by Yandex
            </a>
          </li>
        </ul>
        <ul className="footer__social">
          <li className="footer__social-item">
            <a
              href="http://github.com/"
              className="footer__url"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ghIcon} alt="Img: Github icon" />
            </a>
          </li>
          <li className="footer__social-item">
            <a
              href="http://facebook.com/"
              target="_blank"
              className="footer__url"
              rel="noreferrer"
            >
              <img src={fbIcon} alt="Img: Facebook icon" />
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Footer;
