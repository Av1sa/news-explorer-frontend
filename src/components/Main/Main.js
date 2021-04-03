import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import SearchResults from '../SearchResults/SearchResults';
import './Main.css';

export default function Main({ cards, searching, loggedIn, username }) {
  return (
    <div>
      <div className="main__bg">
        <Header username={username} loggedIn={loggedIn} isHome={true}/>
        <SearchForm />
      </div>
      <SearchResults cards={cards} searching={searching} loggedIn={loggedIn} />
      <About />
    </div>
  );
}
