import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import noImage from '../../images/no_image_available.jpeg';

function NewsCardList({ cards, searching, loggedIn, keyword }) {
  console.log(cards);
  return (
    <ul className="card-list">
      {cards.map((card, index) => (
        <NewsCard
          image={card.urlToImage || noImage}
          date={card.publishedAt}
          title={card.title}
          text={card.description}
          source={card.source.name}
          keyword={keyword}
          searching={searching}
          loggedIn={loggedIn}
          key={index}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
