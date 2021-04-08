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
import newsApi from '../../utils/NewsApi';

function App() {
  const [signinPopupOpen, setSigninPopupOpen] = useState(false);
  const [signupPopupOpen, setSignupPopupOpen] = useState(false);
  const [isSuccessTooltipOpen, setIsSuccessTooltipOpen] = useState(false);
  const [isErrorTooltipOpen, setIsErrorTooltipOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const [found, setFound] = useState(false);
  const [nothingFound, setNothingFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    // eslint-disable-next-line
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
    setSigninPopupOpen(false);
  };
  const handleSignupSubmit = () => {
    setIsSuccessTooltipOpen(true);
    setSignupPopupOpen(false);
  };

  const handleSigninBtnClick = () => {
    setSigninPopupOpen(true);
  };

  const handleTooltipLinkClick = () => {
    setIsSuccessTooltipOpen(false);
    setSigninPopupOpen(true);
  };

  const handleSearchSubmit = (keyword) => {
    setKeyword(keyword);
    setFound(false);
    setNothingFound(false);
    setIsLoading(true);
    newsApi
      .getCards(keyword)
      .then((res) => {
        setIsLoading(false);
        if (res.totalResults === 0) {
          setNothingFound(true);
        } else {
          setFound(true);
          setArticles(res.articles);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main
            cards={articles}
            username="Hamlet"
            keyword={keyword}
            searching
            loggedIn={loggedIn}
            onSigninBtnClick={handleSigninBtnClick}
            onSearchSubmit={handleSearchSubmit}
            found={found}
            nothingFound={nothingFound}
            isLoading={isLoading}
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
        onSignupSubmit={handleSignupSubmit}
      />
      <InfoTooltip
        isOpen={isSuccessTooltipOpen}
        onClose={closeAllPopups}
        type="success"
        handleClick={null}
        onLinkClick={handleTooltipLinkClick}
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
