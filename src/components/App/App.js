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
  const [numCardsToShow, setNumCardsToShow] = useState(3);

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
    // eslint-disable-next-line
  }, [location, loggedIn]);

  useEffect(() => {
    document.addEventListener('keyup', closeOnEscape);
    return () => {
      document.removeEventListener('keyup', closeOnEscape);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    checkIfSaved();
    // eslint-disable-next-line
  }, [location, articles, savedArticles]);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setToken(token);
      validateAndSetUser(token);
      getSavedArticles();
      if (
        localStorage.getItem('savedSearch') &&
        localStorage.getItem('keyword')
      ) {
        setArticles(JSON.parse(localStorage.getItem('savedSearch')));
        setKeyword(localStorage.getItem('keyword'));
        setFound(true);
      }
    }
    // eslint-disable-next-line
  }, [loggedIn]);

  // Get saved articles
  const getSavedArticles = () => {
    mainApi
      .getSavedArticles(token)
      .then((data) => {
        if (!data.message) {
          data.map((card) => (card.isSaved = true));
          // TO DO does't update savedArticles when called from onCardIconClick
          setSavedArticles(data);
        }
      })
      .catch((err) => console.log(err));
  };

  // Sign in, sign up, sign out
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
            getSavedArticles();
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('savedSearch');
    localStorage.removeItem('keyword');
    setToken('');
    setLoggedIn(false);
    setSavedArticles([]);
  };

  const validateAndSetUser = (token) => {
    mainApi
      .validateUser(token)
      .then((data) => {
        if (!data.message) {
          setCurrentUser(data);
          setLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
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
            setArticles(res.articles);
            setFound(true);
            if (loggedIn) {
              localStorage.setItem('savedSearch', JSON.stringify(res.articles));
              localStorage.setItem('keyword', keyword);
            }
          }
        })
        .catch((err) => console.log(err));
    } else {
      setNothingFound('no-keyword');
      setFound(false);
    }
  };

  // Card icon click
  const handleCardIconClick = (card) => {
    if (loggedIn) {
      if (!card.isSaved) {
        mainApi
          .saveArticle(
            {
              title: card.title,
              text: card.text,
              date: card.date,
              source: card.source,
              link: card.link,
              image: card.image,
              keyword: card.keyword,
            },
            token,
          )
          // .then(() => getSavedArticles())
          .then((article) => {
            card.isSaved = true;
            card._id = article._id;
            console.log('card saved:', card);
            console.log('articles', articles);
          })
          .catch((err) => console.log(err));
      } else {
        mainApi
          .removeArticle(card._id, token)
          // .then(() => getSavedArticles())
          .then(() => {
            card.isSaved = false;
            card._id = '';
            setArticles(articles)
            console.log('card removed', card);
            console.log('articles', articles);
          })
          .catch((err) => console.log(err));
      }
    } else {
      resetForm();
      setSigninPopupOpen(true);
    }
  };

  // Mark saved articles in search results
  const checkIfSaved = () => {
    articles.forEach((article) => {
      article.isSaved = false;
      savedArticles.forEach((savedArticle) => {
        if (savedArticle.link === article.url) {
          article._id = savedArticle._id;
          article.isSaved = true;
        }
      });
    });
    setArticles(articles);
  };

  // Forms validation
  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
    setSubmitError('');
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

  const onMoreCardsClick = (num) => {
    setNumCardsToShow(numCardsToShow + num);
  };

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
              onMoreCardsClick={onMoreCardsClick}
              numCardsToShow={numCardsToShow}
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
