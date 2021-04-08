import './SearchForm.css';

function SearchForm() {
  return (
    <div className="search">
      <input type="text" className="search__input" placeholder="Enter topic" />
      <button type="submit" className="content-text search__button">
        Search
      </button>
    </div>
  );
}

export default SearchForm;
