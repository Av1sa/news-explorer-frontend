import React from 'react';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Header from '../Header/Header';
import SearchResults from '../SearchResults/SearchResults';
import Preloader from '../SearchResults/Preloader';
import NothingFound from '../SearchResults/NothingFound';
import './Main.css';

export default function Main({
  cards,
  searching,
  loggedIn,
  username,
  keyword,
  onSigninBtnClick,
  onSearchSubmit,
  nothingFound,
  isLoading,
  found
}) {
  return (
    <>
      <div className="main__bg">
        <Navigation
          username={username}
          loggedIn={loggedIn}
          isHome={searching}
          onClick={onSigninBtnClick}
        />
        <Header onSearchSubmit={onSearchSubmit} />
      </div>
      {isLoading && <Preloader />}
      {nothingFound && <NothingFound />}
      {found && (
        <SearchResults
          cards={cards}
          searching={searching}
          loggedIn={loggedIn}
          keyword={keyword}
        />
      )}
      <About />
    </>
  );
}
