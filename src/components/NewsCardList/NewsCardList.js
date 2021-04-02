import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ cards }) {
  return (
    <ul className="card-list">
      {cards.map((card) => (
        <NewsCard
          image={card.image}
          date={card.date}
          title={card.title}
          text={card.text}
          source={card.source}
          keyword={card.keyword}
          searching={false}
          loggedIn={true}
          key={card.id}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
