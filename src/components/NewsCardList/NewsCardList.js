import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
// import noImage from '../../images/no_image_available.jpeg';

function NewsCardList({ cards, searching, loggedIn, keyword, onIconClick }) {
  return (
    <ul className="card-list">
      {cards.map((card, index) => (
        <NewsCard
          card={card}
          keyword={keyword}
          searching={searching}
          loggedIn={loggedIn}
          key={index}
          onIconClick={onIconClick}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
