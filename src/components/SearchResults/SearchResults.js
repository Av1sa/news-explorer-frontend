import { useState, useEffect } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SearchResults.css';
import { NUM_CARDS_MORE } from '../../utils/const';

function SearchResults({
  cards,
  searching,
  loggedIn,
  keyword,
  onCardIconClick,
  numCardsToShow,
  onMoreCardsClick,
}) {
  const [cardsToShow, setCardsToShow] = useState([]);
  const [btnVisible, setBtnVisible] = useState(numCardsToShow < cards.length);

  useEffect(() => {
    setBtnVisible(numCardsToShow < cards.length);
    setCardsToShow(cards.slice(0, numCardsToShow));
  }, [cards, numCardsToShow]);

  const handleClick = () => {
    onMoreCardsClick(NUM_CARDS_MORE);
  };

  return (
    <div className="search-results">
      <h2 className="content-title search-results__title">
        Search results: {keyword}
      </h2>
      <NewsCardList
        cards={cardsToShow}
        searching={searching}
        loggedIn={loggedIn}
        keyword={keyword}
        onIconClick={onCardIconClick}
      />
      {btnVisible && (
        <button
          type="button"
          className="content-text search-results__button"
          onClick={handleClick}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default SearchResults;
