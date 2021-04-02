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
      <button
        className={`card__icon ${
          searching ? 'card__icon_type_save' : 'card__icon_type_delete'
        }`}
      ></button>
      {searching && !loggedIn && (
        <div className="card__tooltip">{tooltips.SIGNIN_TO_SAVE_ARTICLES}</div>
      )}
      {!searching && loggedIn && (
        <>
          <div className="card__tooltip">{tooltips.REMOVE_FROM_SAVED}</div>
          <div className="card__keyword">{keyword}</div>
        </>
      )}
      {/* {!searching && loggedIn && } */}
    </li>
  );
}

export default NewsCard;
