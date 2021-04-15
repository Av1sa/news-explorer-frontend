import './SearchResults.css';
import nothingFoundImg from '../../images/nothing_found_icon.svg';
import {
  NOTHING_FOUND,
  NOTHING_MATCHED,
  ENTER_KEYWORD,
  DATA_ERROR,
} from '../../utils/const';

function NothingFound({ type }) {
  let text;
  switch (type) {
    case 'no-results':
      text = NOTHING_MATCHED;
      break;
    case 'no-keyword':
      text = ENTER_KEYWORD;
      break;
    case 'data-error':
      text = DATA_ERROR;
      break;
  }
  return (
    <div className="search-results">
      <img
        src={nothingFoundImg}
        alt="Img: Nothing found"
        className="search-results__nf-icon"
      />
      <h3 className="search-results__nf-title">{NOTHING_FOUND}</h3>
      <p className="content-text search-results__text">{text}</p>
    </div>
  );
}

export default NothingFound;
