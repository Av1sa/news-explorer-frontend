import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import InfoTooltip from '../Popup/InfoTooltip';
import newsApi from '../../utils/NewsApi';
import mainApi from '../../utils/MainApi';
import PopupWithForm from '../Popup/PopupWithForm';
import { BAD_INPUT } from '../../utils/const';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [signinPopupOpen, setSigninPopupOpen] = useState(false);
  const [signupPopupOpen, setSignupPopupOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const [found, setFound] = useState(false);
  const [nothingFound, setNothingFound] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const location = useLocation();

  useEffect(() => {
    resetForm();
    !loggedIn && location.signin
      ? setSigninPopupOpen(true)
      : setSigninPopupOpen(false);
    location.signin = false;
  }, [location, loggedIn]);

  useEffect(() => {
    document.addEventListener('keyup', closeOnEscape);
    return () => {
      document.removeEventListener('keyup', closeOnEscape);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setToken(token);
      validateAndSetUser(token);
    }
  }, [loggedIn]);

  // Validate, register, login
  const validateAndSetUser = (token) => {
    mainApi
      .validateUser(token)
      .then((data) => {
        if (data.message) {
          console.log(data.message);
        } else {
          setCurrentUser(data);
          setLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const getSavedArticles = () => {
    mainApi
      .getSavedArticles(token)
      .then((data) => setSavedArticles(data.message ? [] : data))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    mainApi
      .registerUser({
        email: values.email,
        password: values.password,
        name: values.username,
      })
      .then((data) => {
        if (data.statusCode && data.statusCode === 400) {
          setSubmitError(BAD_INPUT);
        } else {
          if (data.message) {
            setSubmitError(data.message);
          } else {
            setIsTooltipOpen(true);
            setSignupPopupOpen(false);
          }
        }
      })
      .catch((err) => console.log(err));
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    mainApi
      .signInUser({
        email: values.email,
        password: values.password,
      })
      .then((data) => {
        if (data.statusCode && data.statusCode === 400) {
          setSubmitError(BAD_INPUT);
        } else {
          if (data.message) {
            setSubmitError(data.message);
          } else {
            localStorage.setItem('jwt', data.token);
            setToken(data.token);
            validateAndSetUser(data.token);
            setSigninPopupOpen(false);
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setToken('');
    setLoggedIn(false);
  };

  // Popups
  const closeAllPopups = () => {
    setSigninPopupOpen(false);
    setSignupPopupOpen(false);
    setIsTooltipOpen(false);
  };

  const closeOnEscape = (event) => {
    if (event.keyCode === 27) {
      closeAllPopups();
    }
  };

  const handleSigninPopupLinkClick = () => {
    resetForm();
    setSignupPopupOpen(true);
    setSigninPopupOpen(false);
  };
  const handleSignupPopupLinkClick = () => {
    resetForm();
    setSigninPopupOpen(true);
    setSignupPopupOpen(false);
  };

  const handleSigninBtnClick = () => {
    resetForm();
    setSigninPopupOpen(true);
  };

  const handleTooltipLinkClick = () => {
    setIsTooltipOpen(false);
    resetForm();
    setSigninPopupOpen(true);
  };

  // Search
  const handleSearchSubmit = (keyword) => {
    setNothingFound('');
    if (keyword !== '') {
      setKeyword(keyword);
      setFound(false);
      setIsLoading(true);
      newsApi
        .getCards(keyword)
        .then((res) => {
          setIsLoading(false);
          if (!res) {
            setNothingFound('data-error');
          }
          if (res.totalResults === 0) {
            setNothingFound('no-results');
          } else {
            setFound(true);
            setArticles(res.articles);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setNothingFound('no-keyword');
      setFound(false);
    }
  };

  // Card icon click
  const handleCardIconClick = (card, classList) => {
    if (loggedIn && classList.contains('card__icon_type_save')) {
      mainApi
        .saveArticle(card, token)
        .then((article) => {
          if (article) {
            classList.remove('card__icon_type_save');
            classList.add('card__icon_type_marked');
          }
        })
        .catch((err) => console.log(err));
    }
    if (!loggedIn && classList.contains('card__icon_type_save')) {
      resetForm();
      setSigninPopupOpen(true);
    }
    if (classList.contains('card__icon_type_delete')) {
      mainApi
        .removeArticle(card._id, token)
        .then(() => getSavedArticles(token))
        .catch((err) => console.log(err));
    }
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
    setSubmitError('');
    console.log('values from handleChange', values);
  };

  const resetForm = useCallback(
    (
      newValues = { email: '', password: '', username: '' },
      newErrors = {},
      newIsValid = false,
    ) => {
      setSubmitError('');
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main
              cards={articles}
              keyword={keyword}
              searching
              loggedIn={loggedIn}
              onSigninBtnClick={handleSigninBtnClick}
              onSearchSubmit={handleSearchSubmit}
              onSignOutBtnClick={handleSignOut}
              found={found}
              nothingFound={nothingFound}
              isLoading={isLoading}
              onCardIconClick={handleCardIconClick}
            />
          </Route>
          <ProtectedRoute
            component={SavedNews}
            exact
            path="/saved-news"
            loggedIn={loggedIn}
            searching={false}
            savedArticles={savedArticles}
            onSigninBtnClick={handleSigninBtnClick}
            onSignOutBtnClick={handleSignOut}
            onCardIconClick={handleCardIconClick}
            onMount={getSavedArticles}
          />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />

        <PopupWithForm
          name="signin"
          values={values}
          errors={errors}
          isValid={isValid}
          submitError={submitError}
          isOpen={signinPopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleSignIn}
          onLinkClick={handleSigninPopupLinkClick}
          onInputChange={handleInputChange}
          onReset={resetForm}
        />
        <PopupWithForm
          name="signup"
          values={values}
          errors={errors}
          isValid={isValid}
          submitError={submitError}
          isOpen={signupPopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleSignUp}
          onLinkClick={handleSignupPopupLinkClick}
          onInputChange={handleInputChange}
        />

        <InfoTooltip
          isOpen={isTooltipOpen}
          onClose={closeAllPopups}
          handleClick={null}
          onLinkClick={handleTooltipLinkClick}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
