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
  keyword,
  onSigninBtnClick,
  onSignOutBtnClick,
  onSearchSubmit,
  nothingFound,
  keywordError,
  isLoading,
  found,
  onCardIconClick
}) {
  return (
    <>
      <div className="main__bg">
        <Navigation
          loggedIn={loggedIn}
          isHome={searching}
          onSignIn={onSigninBtnClick}
          onSignOut={onSignOutBtnClick}
        />
        <Header onSearchSubmit={onSearchSubmit} />
      </div>
      {isLoading && <Preloader />}
      {nothingFound !== '' && <NothingFound type={nothingFound}/>}
      {found && (
        <SearchResults
          cards={cards}
          searching={searching}
          loggedIn={loggedIn}
          keyword={keyword}
          onCardIconClick={onCardIconClick}
        />
      )}
      <About />
    </>
  );
}
