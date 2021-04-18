import React from 'react';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Navigation from '../Navigation/Navigation';

function SavedNews({
  savedArticles,
  searching,
  loggedIn,
  onSigninBtnClick,
  onSignOutBtnClick,
  onCardIconClick,
}) {
  return (
    <>
      <Navigation
        loggedIn={loggedIn}
        isHome={searching}
        onSignIn={onSigninBtnClick}
        onSignOut={onSignOutBtnClick}
      />
      <SavedNewsHeader savedArticles={savedArticles} />
      {savedArticles && savedArticles.length > 0 && (
        <div className="saved-news__container">
          <NewsCardList
            cards={savedArticles}
            searching={searching}
            loggedIn={loggedIn}
            onIconClick={onCardIconClick}
          />
        </div>
      )}
    </>
  );
}

export default SavedNews;
