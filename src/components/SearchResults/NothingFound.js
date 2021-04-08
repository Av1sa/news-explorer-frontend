import './SearchResults.css';
import nothingFoundImg from '../../images/nothing_found_icon.svg';

function NothingFound() {
  return (
    <div className="search-results">
      <img
        src={nothingFoundImg}
        alt="Img: Nothing found"
        className="search-results__nf-icon"
      />
      <h3 className="search-results__nf-title">Nothing found</h3>
      <p className="content-text search-results__text">
        Sorry, but nothing matched your search criteria.
      </p>
    </div>
  );
}

export default NothingFound;
