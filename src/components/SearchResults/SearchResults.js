import { useState, useEffect } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SearchResults.css';

function SearchResults({ cards, searching, loggedIn, keyword }) {
  const [numCardsToShow, setNumCardsToShow] = useState(3);
  const [cardsToShow, setCardsToShow] = useState([]);
  const [btnVisible, setBtnVisible] = useState(numCardsToShow < cards.length);

  useEffect(() => {
    setBtnVisible(numCardsToShow < cards.length);
    setCardsToShow(cards.slice(0, numCardsToShow));
  }, [cards, numCardsToShow]);

  return (
    <div className="search-results">
      <h2 className="content-title search-results__title">Search results</h2>
      <NewsCardList
        cards={cardsToShow}
        searching={searching}
        loggedIn={loggedIn}
        keyword={keyword}
      />
      {btnVisible && (
        <button
          type="button"
          className="content-text search-results__button"
          onClick={() => setNumCardsToShow(numCardsToShow + 3)}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default SearchResults;
