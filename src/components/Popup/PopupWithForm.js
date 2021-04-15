import React from 'react';
import './Popup.css';

function PopupWithForm({
  name,
  values,
  errors,
  isValid,
  submitError,
  isOpen,
  onClose,
  onSubmit,
  onLinkClick,
  onInputChange,
  onReset
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
        <h2 className="popup__title">Sign {name === 'signin' ? 'in' : 'up'}</h2>
        <form
          className="popup__form"
          name={name}
          onSubmit={onSubmit}
          onReset={onReset}
          noValidate
        >
          <label className="popup__label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="popup__input popup__text"
            placeholder="Enter email"
            required
            id="email-input"
            name="email"
            value={values.email}
            onChange={onInputChange}
          />
          <span className="popup__input-error" id="email-input-error">
            {errors.email}
          </span>

          <label className="popup__label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="popup__input popup__text"
            placeholder="Enter password"
            required
            id="password-input"
            name="password"
            value={values.password}
            onChange={onInputChange}
          />
          <span className="popup__input-error" id="password-input-error">
            {errors.password}
          </span>

          {name === 'signup' && (
            <>
              <label className="popup__label" htmlFor="username">
                Username
              </label>
              <input
                type="username"
                className="popup__input popup__text"
                placeholder="Enter your username"
                required
                id="username-input"
                value={values.username}
                name="username"
                onChange={onInputChange}
              />
              <span className="popup__input-error" id="username-input-error">
                {errors.username}
              </span>
            </>
          )}

          <span className="popup__input-error" id="submit-input-error">
            {submitError}
          </span>
          <button type="submit" className="popup__submit" disabled={!isValid}>
            Sign {name === 'signin' ? 'in' : 'up'}
          </button>
          <p className="popup__text popup__text_type_bottom-link">
            or{' '}
            <span className="popup__link" onClick={onLinkClick}>
              Sign {name === 'signin' ? 'up' : 'in'}
            </span>
          </p>
        </form>
        <button type="reset" className="popup__close" onClick={onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;
