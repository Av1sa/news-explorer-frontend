import React, { useState } from 'react';
import './Popup.css';
import PopupWithForm from './PopupWithForm';

function PopupSignup({ isOpen, onClose, onSignupPopupLinkClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleLinkClick = () => {
    onSignupPopupLinkClick();
  };
  const popupSignupChildren = () => (
    <>
      <label className="popup__label">
        Email
        <input
          type="email"
          className="popup__input popup__text"
          placeholder="Enter email"
          required
          id="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="popup__label">
        Password
        <input
          type="password"
          className="popup__input popup__text"
          placeholder="Enter password"
          required
          id="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label className="popup__label">
        Email
        <input
          type="username"
          className="popup__input popup__text"
          placeholder="Enter your username"
          required
          id="username-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
    </>
  );
  return (
    <>
      <PopupWithForm
        name="signup"
        title="Sign up"
        children={popupSignupChildren()}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        linkText="Sign in"
        onLinkClick={handleLinkClick}
      />
    </>
  );
}

export default PopupSignup;
