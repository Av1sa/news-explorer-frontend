import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader({ username, cards }) {
  // array of unique keywords
  const keywords = Array.from(new Set(cards.map((card) => card.keyword)));

  let desc;
  switch (keywords.length) {
    case 0:
      desc = 'n/a';
      break;
    case 1:
      desc = keywords[0];
      break;
    case 2:
      desc = `${keywords[0]}, ${keywords[1]}`;
      break;
    default:
      desc = `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} other`;
  }

  return (
    <div className="saved-news-header">
      <p className="content-text saved-news-header__page-title">
        Saved articles
      </p>
      <h2 className="content-title saved-news-header__title">
        {username}, you have {cards.length} saved articles
      </h2>
      <p className="content-text">
        By keywords: <span className="content-text_type_bold">{desc}</span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
