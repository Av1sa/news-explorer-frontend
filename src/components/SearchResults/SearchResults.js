import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SearchResults.css';

function SearchResults({ cards, searching, loggedIn }) {
  return (
    <div className="search-results">
      <h2 className="content-title search-results__title">Search results</h2>
      <NewsCardList
        cards={cards}
        searching={searching}
        loggedIn={loggedIn}
      />
      <button className="content-text search-results__button">Show more</button>
    </div>
  );
}

export default SearchResults;
