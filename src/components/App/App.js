import React, { useState } from 'react';
import './App.css';
import cards from '../../utils/cards';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import { Switch, Route, useHistory } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main
            cards={cards}
            username="Hamlet"
            searching={true}
            loggedIn={true}
          />
        </Route>
        <Route path="/saved-news">
          <SavedNews
            cards={cards}
            username="Hamlet"
            searching={false}
            loggedIn={true}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

/* 
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />
      <PopupWithImage
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
      <InfoTooltip
        type="success"
        isOpen={isSuccessTooltipOpen}
        onClose={closeAllPopups}
      />
      <InfoTooltip
        type="error"
        isOpen={isErrorTooltipOpen}
        onClose={closeAllPopups}
      /> */
