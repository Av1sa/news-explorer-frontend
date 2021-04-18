import React from 'react';
import { REGISTRATION_SUCCESSFULLY_COMPLETED } from '../../utils/const';
import './Popup.css';

function InfoTooltip({ isOpen, onClose, onLinkClick }) {
  const title = REGISTRATION_SUCCESSFULLY_COMPLETED;

  const handleLinkClick = () => {
    onLinkClick();
  };

  return (
    <div className={`popup ${isOpen && 'popup_is-opened'}`}>
      <div className="popup__container popup__container_type_tooltip">
        <h2 className="popup__title tooltip__title">{title}</h2>
        <p className="tooltip__link" onClick={handleLinkClick}>
          Sign in
        </p>
        <button type="button" className="popup__close" onClick={onClose} />
      </div>
    </div>
  );
}

export default InfoTooltip;
