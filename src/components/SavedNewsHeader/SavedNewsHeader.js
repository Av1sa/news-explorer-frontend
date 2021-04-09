import React from 'react';
import './SavedNewsHeader.css';
import { countKeywords, sortKeywords, createDesc } from '../../utils/utils';

function SavedNewsHeader({ username, cards }) {
  const sortedKeywords = sortKeywords(countKeywords(cards));

  return (
    <header className="saved-news-header">
      <p className="content-text saved-news-header__page-title">
        Saved articles
      </p>
      <h2 className="content-title saved-news-header__title">
        {username}, you have {cards.length} saved articles
      </h2>
      <p className="content-text">
        By keywords:{' '}
        <span className="content-text_type_bold">
          {createDesc(sortedKeywords)}
        </span>
      </p>
    </header>
  );
}

export default SavedNewsHeader;
