import './SearchResults.css';

function Preloader() {
  return (
    <div className="search-results">
      <div className="search-results__preloader" />
      <p className="content-text search-results__text">Searching for news...</p>
    </div>
  );
}

export default Preloader;
