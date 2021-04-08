import React from 'react';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Navigation from '../Navigation/Navigation';

function SavedNews({
  cards, username, searching, loggedIn,
}) {
  return (
    <>
      <Navigation username={username} loggedIn={loggedIn} isHome={false} />
      <SavedNewsHeader cards={cards} username={username} />
      <div className="saved-news__container">
        <NewsCardList cards={cards} searching={searching} loggedIn={loggedIn} />
      </div>
    </>
  );
}

export default SavedNews;
