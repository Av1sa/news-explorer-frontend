import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <div className="search">
      <h1 className="search__title">What's going on in the world?</h1>
      <p className="content-text search__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className="search__form">
        <input type="text" className="search__input" placeholder="Enter topic"/>
        <button type="submit" className="content-text search__button">Search</button>
      </div>
    </div>
  );
}

export default SearchForm;
