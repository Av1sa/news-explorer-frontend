import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ cards, searching, loggedIn, keyword, onIconClick }) {
  return (
    <ul className="card-list">
      {cards.map((card, index) => (
        <NewsCard
          card={card}
          searchWord={keyword}
          searching={searching}
          loggedIn={loggedIn}
          key={card._id || index}
          onIconClick={onIconClick}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
