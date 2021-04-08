import './Header.css';
import SearchForm from '../SearchForm/SearchForm';

function Header({ onSearchSubmit }) {
  return (
    <header className="header">
      <h1 className="header__title">What's going on in the world?</h1>
      <p className="content-text header__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm onSubmit={onSearchSubmit} />
    </header>
  );
}

export default Header;
