import React, { useState } from 'react';
import './Popup.css';
import PopupWithForm from './PopupWithForm';

function PopupSignin({ isOpen, onClose, onSigninPopupLinkClick, onSigninSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLinkClick = () => {
    onSigninPopupLinkClick();
  };

  // const handleSubmit = () => {
  //   onSigninSubmit();
  // };
  const popupSigninChildren = () => (
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
    </>
  );
  return (
    <>
      <PopupWithForm
        name="signin"
        title="Sign in"
        children={popupSigninChildren()}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onSigninSubmit}
        linkText="Sign up"
        onLinkClick={handleLinkClick}
      />
    </>
  );
}

export default PopupSignin;
