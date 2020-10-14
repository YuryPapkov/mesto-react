import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]=React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]=React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]=React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen]=React.useState(false);
  const [selectedCard, setSelectedCard]=React.useState({});
  const [currentUser, setCurrentUser]=React.useState({});

  React.useEffect(()=>{
  api.userDownload()
  .then((data)=>{
    setCurrentUser(data);
  });
},[]);

  function handleEditProfileClick  () {
    setIsEditProfilePopupOpen(true);
  };
  function handleAddPlaceClick ()  {
    setIsAddPlacePopupOpen(true);
  };
  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  };
  function handleCardClick (card) {
    setSelectedCard(card);
  };
  function closeAllPopups (){
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
      <div className="body">
        <Header/>
        <Main
          onEditProfile= {handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar= {handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer/>
        <PopupWithForm
          title="Редактировать профиль"
          name="edit"
          submitText="Сохранить"
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
        >
          <input
            name="name"
            className="popup__input popup__input_type_name"
            type="text"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
          />
          <span className="popup__error popup__error_type_name"></span>
          <input
            name="occupation"
            className="popup__input popup__input_type_occupation"
            type="text"
            required
            minLength="2"
            maxLength="200"
            autoComplete="off"
          />
          <span className="popup__error popup__error_type_occupation"></span>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="new-card"
          submitText="Сохранить"
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
        >
          <input
            name="place"
            className="popup__input popup__input_type_place"
            type="text"
            placeholder="название"
            required
            minLength="1"
            maxLength="30"
            autoComplete="off"
          />
          <span className="popup__error popup__error_type_place"></span>
          <input
            name="link"
            className="popup__input popup__input_type_link"
            type="url"
            required
            placeholder="ссылка на картинку"
            autoComplete="off"
          />
          <span className="popup__error popup__error_type_link"></span>
        </PopupWithForm>

        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          submitText="Сохранить"
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
        >
          <input
            name="link"
            className="popup__input popup__input_type_link"
            type="url"
            required
            placeholder="ссылка на картинку"
            autoComplete="off"
          />
          <span className="popup__error popup__error_type_link"></span>
        </PopupWithForm>

        <PopupWithForm
          title="Вы уверены?"
          name="confirm"
          submitText="да"
          onClose={closeAllPopups}
          isOpen={isConfirmPopupOpen}
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
