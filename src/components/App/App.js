import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import cards from '../../utils/cards';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import InfoTooltip from '../Popup/InfoTooltip';
import PopupSignin from '../Popup/PopupSignin';
import PopupSignup from '../Popup/PopupSignup';

function App() {
  const [signinPopupOpen, setSigninPopupOpen] = useState(false);
  const [signupPopupOpen, setSignupPopupOpen] = useState(false);
  const [isSuccessTooltipOpen, setIsSuccessTooltipOpen] = useState(false);
  const [isErrorTooltipOpen, setIsErrorTooltipOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const closeAllPopups = () => {
    setSigninPopupOpen(false);
    setSignupPopupOpen(false);
    setIsSuccessTooltipOpen(false);
    setIsErrorTooltipOpen(false);
  };

  const closeOnEscape = (event) => {
    if (event.keyCode === 27) {
      closeAllPopups();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', closeOnEscape);
    return () => {
      document.removeEventListener('keyup', closeOnEscape);
    };
  }, []);

  const handleSigninPopupLinkClick = () => {
    setSignupPopupOpen(true);
    setSigninPopupOpen(false);
  };
  const handleSignupPopupLinkClick = () => {
    setSigninPopupOpen(true);
    setSignupPopupOpen(false);
  };

  const handleSigninSubmit = () => {
    setLoggedIn(true);
  };

  const handleSigninBtnClick = () => {
    setSigninPopupOpen(true);
  };

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main
            cards={cards}
            username="Hamlet"
            searching
            loggedIn={loggedIn}
            onClick={handleSigninBtnClick}
          />
        </Route>
        <Route path="/saved-news">
          <SavedNews
            cards={cards}
            username="Hamlet"
            searching={false}
            loggedIn={loggedIn}
          />
        </Route>
      </Switch>
      <Footer />

      <PopupSignin
        isOpen={signinPopupOpen}
        onClose={closeAllPopups}
        onSigninPopupLinkClick={handleSigninPopupLinkClick}
        onSigninSubmit={handleSigninSubmit}
      />
      <PopupSignup
        isOpen={signupPopupOpen}
        onClose={closeAllPopups}
        onSignupPopupLinkClick={handleSignupPopupLinkClick}
      />
      <InfoTooltip
        isOpen={isSuccessTooltipOpen}
        onClose={closeAllPopups}
        type="success"
        handleClick={null}
      />
      <InfoTooltip
        isOpen={isErrorTooltipOpen}
        onClose={closeAllPopups}
        type="fail"
        handleClick={null}
      />
    </div>
  );
}

export default App;
