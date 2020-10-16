import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmPopup from './ConfirmPopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [willBeDeletedCard, setWillBeDeletedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    const userFromServer = api.userDownload();
    const cardsFromServer = api.cardsDownload();
    const dataDownload = [userFromServer, cardsFromServer];
    Promise.all(dataDownload)
      .then((data) => {
        setCurrentUser(data[0]);
        setCards(data[1]);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      console.log(newCard);
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    });
  };


  function handleCardDelete(card) {
    setIsConfirmPopupOpen(true);
    setWillBeDeletedCard(card);
  };
  function handleDeleteCardConfirmation() {
    const isOwn = willBeDeletedCard.owner._id === currentUser._id;
    if (isOwn) {
      api.deleteCard(willBeDeletedCard._id)
        .then(() => {
          const newCards = cards.filter((c) => {
            return (c._id !== willBeDeletedCard._id);
          });
          setCards(newCards);
        });
    }
    closeAllPopups();
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };
  function handleCardClick(card) {
    setSelectedCard(card);
  };
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard({});
    setWillBeDeletedCard({});
  }
  function handleUpdateUser({ name, about }) {
    api.profileDataUpload(name, about)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
  }
  function handleUpdateAvatar(link) {
    api.avatarUpload({ link: link })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
  }
  function handleAddPlaceSubmit(title, link) {
    api.newCardUpload(title, link)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="body">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser} />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit} />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <ConfirmPopup
            isOpen={isConfirmPopupOpen}
            onClose={closeAllPopups}
            onConfirm={handleDeleteCardConfirmation}
          />

          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
          />

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
