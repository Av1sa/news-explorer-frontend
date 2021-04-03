import React, { useState } from 'react';
import './App.css';
import cards from '../../utils/cards';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <Main cards={cards} username="Hamlet" searching={true} loggedIn={true} />
      <SavedNews
        cards={cards}
        username="Hamlet"
        searching={false}
        loggedIn={true}
      />
      <Footer />
    </div>
  );
}

export default App;

/* <Header email={email} loggedIn={loggedIn} onSignOut={handleSignOut} />
      <Switch>
        <ProtectedRoute
          component={Main}
          exact
          path="/"
          loggedIn={loggedIn}
          cards={cards}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Route path="/signin">
          <Login onLogin={handleSignIn} />
        </Route>
        <Route path="/signup">
          <Register onRegister={handleRegister} />
        </Route>
        <Route>
          <Redirect to={loggedIn ? "/" : "/signin"} />
        </Route>
      </Switch>
      {loggedIn && <Footer />}
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
