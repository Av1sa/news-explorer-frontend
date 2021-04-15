import './SearchForm.css';
import { useState } from 'react';

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(keyword);
  };
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search__input"
        placeholder="Enter topic"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        type="submit"
        className="content-text search__button"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
