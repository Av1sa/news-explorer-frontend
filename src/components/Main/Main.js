import React from 'react';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../Header/Header';
import About from '../About/About';
import Header from '../Header/Header';
import SearchResults from '../SearchResults/SearchResults';
import './Main.css';

export default function Main({ cards, searching, loggedIn, username }) {
  return (
    <>
      <div className="main__bg">
        <Navigation username={username} loggedIn={loggedIn} isHome={true} />
        <Header />
      </div>
      <SearchResults cards={cards} searching={searching} loggedIn={loggedIn} />
      <About />
    </>
  );
}
