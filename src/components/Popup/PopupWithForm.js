import React from 'react';
import './Popup.css';

function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  onSubmit,
  linkText,
  onLinkClick,
}) {
  const handleClick = (e) => {
    if (e.target.classList.contains('popup')) {
      onClose();
    }
  };

  return (
    <div
      className={`popup popup_type_${name} ${isOpen && 'popup_is-opened'}`}
      onClick={handleClick}
    >
      <div className="popup__container popup__container_type_form">
        <form name={name} onSubmit={onSubmit} noValidate>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__submit">
            {title}
          </button>
          <p className="popup__text popup__text_type_bottom-link">
            or
            {' '}
            <span className="popup__link" onClick={onLinkClick}>
              {linkText}
            </span>
          </p>
        </form>
        <button type="button" className="popup__close" onClick={onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;
