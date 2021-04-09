import React from 'react';
import './NewsCard.css';
import { SIGNIN_TO_SAVE_ARTICLES, REMOVE_FROM_SAVED } from '../../utils/const';
import { formatDate } from '../../utils/utils';

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
      />
      <div className="card__info">
        <p className="content-text card__date">{formatDate(date)}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <p className="card__source">{source}</p>
      </div>
      <button
        type="button"
        className={`card__icon ${
          searching ? 'card__icon_type_save' : 'card__icon_type_delete'
        }`}
      />
      {searching && !loggedIn && (
        <div className="card__tooltip">{SIGNIN_TO_SAVE_ARTICLES}</div>
      )}
      {!searching && loggedIn && (
        <>
          <div className="card__tooltip">{REMOVE_FROM_SAVED}</div>
          <div className="card__keyword">{keyword}</div>
        </>
      )}
    </li>
  );
}

export default NewsCard;
