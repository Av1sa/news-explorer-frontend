import React, { useContext } from 'react';
import './SavedNewsHeader.css';
import { countKeywords, sortKeywords, createDesc } from '../../utils/utils';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SavedNewsHeader({ savedArticles }) {
  const sortedKeywords = sortKeywords(countKeywords(savedArticles));
  const currentUser = useContext(CurrentUserContext);
  
  return (
    <header className="saved-news-header">
      <p className="content-text saved-news-header__page-title">
        Saved articles
      </p>
      <h2 className="content-title saved-news-header__title">
        {currentUser.name},{' '}
        {savedArticles.length === 0
          ? `you don't have any saved articles`
          : `you have ${savedArticles.length} saved articles`}
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
