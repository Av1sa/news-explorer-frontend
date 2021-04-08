import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader({ username, cards }) {
  const numKeywords = cards
    .map((card) => card.keyword)
    .reduce((tally, word) => {
      tally[word] = (tally[word] || 0) + 1;
      return tally;
    }, {});
  const sortedNumKeywords = Object.entries(numKeywords).sort(
    (a, b) => b[1] - a[1],
  );
  let desc;
  switch (sortedNumKeywords.length) {
    case 0:
      desc = 'n/a';
      break;
    case 1:
    case 2:
    case 3:
      desc = sortedNumKeywords
        .splice(1)
        .reduce(
          (accumulator, currentValue) => accumulator + ', ' + currentValue[0],
          sortedNumKeywords[0][0],
        );
      break;
    default:
      desc = `${sortedNumKeywords[0][0]}, ${sortedNumKeywords[1][0]}, and ${
        sortedNumKeywords.length - 2
      } other`;
  }

  return (
    <header className="saved-news-header">
      <p className="content-text saved-news-header__page-title">
        Saved articles
      </p>
      <h2 className="content-title saved-news-header__title">
        {username}, you have
        {cards.length} saved articles
      </h2>
      <p className="content-text">
        By keywords: <span className="content-text_type_bold">{desc}</span>
      </p>
    </header>
  );
}

export default SavedNewsHeader;
