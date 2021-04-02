import React from 'react';
import './NewsCard.css';
import * as tooltips from '../../utils/const';

function NewsCard({
  image,
  date,
  title,
  text,
  source,
  keyword,
  searching,
  loggedIn,
}) {
  return (
    <li className="card">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card__info">
        <p className="content-text card__date">{date}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <p className="card__source">{source}</p>
      </div>
      <div
        className={`card__icon ${
          searching ? 'card__icon_type_save' : 'card__icon_type_delete'
        }`}
      ></div>
      {((searching && !loggedIn) || (!searching && loggedIn)) && (
        <div className="card__tooltip">
          {searching
            ? tooltips.SIGNIN_TO_SAVE_ARTICLES
            : tooltips.REMOVE_FROM_SAVED}
        </div>
      )}
      {!searching && loggedIn && <div className="card__keyword">{keyword}</div>}
    </li>
  );
}

export default NewsCard;
