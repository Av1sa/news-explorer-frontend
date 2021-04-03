import React from 'react';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header';

function SavedNews({ cards, username, searching, loggedIn }) {
  return (
    <div className="saved-news">
      <Header username={username} loggedIn={loggedIn} isHome={false}/>{' '}
      <SavedNewsHeader cards={cards} username={username} />
      <div className="saved-news__container">
        <NewsCardList cards={cards} searching={searching} loggedIn={loggedIn} />
      </div>
    </div>
  );
}

export default SavedNews;
