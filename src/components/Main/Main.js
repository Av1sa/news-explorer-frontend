import React from 'react';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Header from '../Header/Header';
import SearchResults from '../SearchResults/SearchResults';
import './Main.css';

export default function Main({
  cards,
  searching,
  loggedIn,
  username,
  onClick,
}) {
  return (
    <>
      <div className="main__bg">
        <Navigation
          username={username}
          loggedIn={loggedIn}
          isHome
          onClick={onClick}
        />
        <Header />
      </div>
      <SearchResults cards={cards} searching={searching} loggedIn={loggedIn} />
      <About />
    </>
  );
}
