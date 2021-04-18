import React from 'react';
import './NewsCard.css';
import { SIGNIN_TO_SAVE_ARTICLES, REMOVE_FROM_SAVED } from '../../utils/const';
import { formatDate } from '../../utils/utils';
import noImage from '../../images/no_image_available.jpeg';

function NewsCard({ card, searchWord, searching, loggedIn, onIconClick }) {
  const cardModel = searching
    ? {
        title: card.title,
        text: card.description,
        date: card.publishedAt,
        source: card.source.name,
        link: card.url,
        image: card.urlToImage,
        keyword: searchWord,
        isSaved: card.isSaved,
        _id: card._id || '',
      }
    : card;
  const {
    title,
    text,
    date,
    source,
    link,
    image,
    keyword,
    isSaved,
  } = cardModel;

  const handleClick = (e) => {
    if (!e.target.classList.contains('card__icon')) {
      window.open(link, '_blank');
    }
  };

  const handleIconClick = () => {
    onIconClick(cardModel);
  };

  return (
    <li className="card" onClick={handleClick}>
      <div
        className="card__image"
        style={{
          backgroundImage: `url(${image ? image : noImage})`,
        }}
      />
      <div className="card__info">
        <p className="content-text card__date">{formatDate(date)}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <p className="card__source">{source}</p>
      </div>

      {searching && loggedIn && (
        <button
          type="button"
          className={`card__icon ${
            isSaved ? 'card__icon_type_marked' : 'card__icon_type_save'
          }`}
          onClick={handleIconClick}
        ></button>
      )}
      {searching && !loggedIn && (
        <>
          <button
            type="button"
            className="card__icon card__icon_type_save"
            onClick={handleIconClick}
          ></button>
          <div className="card__tooltip">{SIGNIN_TO_SAVE_ARTICLES}</div>
        </>
      )}
      {!searching && loggedIn && (
        <>
          <button
            type="button"
            className="card__icon card__icon_type_delete"
            onClick={handleIconClick}
          />
          <div className="card__tooltip">{REMOVE_FROM_SAVED}</div>
          <div className="card__keyword">{keyword}</div>
        </>
      )}
    </li>
  );
}

export default NewsCard;
