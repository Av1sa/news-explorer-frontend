import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SearchResults.css';
import nothingFoundImg from '../../images/nothing_found_icon.svg';

function SearchResults({ cards, searching, loggedIn }) {
  return (
    <div className="search-results">
      <h2 className="content-title search-results__title">Search results</h2>
      <NewsCardList cards={cards} searching={searching} loggedIn={loggedIn} />
      <button type="button" className="content-text search-results__button">
        Show more
      </button>

      {/* Preloader, switch to 'loading_mode_visible' to make it visible */}
      <div className="loading">
        <div className="loading__preloader" />
        <p className="content-text loading__text">Searching for news...</p>
      </div>

      {/* Nothing found, switch to 'nothing-found_mode_visible' to make it visible */}
      <div className="nothing-found">
        <img
          src={nothingFoundImg}
          alt="Img: Nothing found"
          className="nothing-found__icon"
        />
        <h3 className="nothing-found__title">Nothing found</h3>
        <p className="content-text nothing-found__text">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </div>
  );
}

export default SearchResults;
