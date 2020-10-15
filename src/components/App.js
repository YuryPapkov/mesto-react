import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]=React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]=React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]=React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen]=React.useState(false);
  const [selectedCard, setSelectedCard]=React.useState({});
  const [currentUser, setCurrentUser]=React.useState({});
  const [cards, setCards]=React.useState([]);


  React.useEffect(()=>{
    const userFromServer = api.userDownload();
    const cardsFromServer = api.cardsDownload();
    const dataDownload = [userFromServer, cardsFromServer];
    Promise.all(dataDownload)
      .then((data) => {
        setCurrentUser(data[0]);
        setCards(data[1]);
      });
    },[]);


//   React.useEffect(()=>{
//   api.userDownload()
//   .then((data)=>{
//     setCurrentUser(data);
//   });
// },[]);

function handleCardLike  (card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
    console.log(newCard);
    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
    setCards(newCards);
  });
} ;
function handleCardDelete  (card) {
const isOwn = card.owner._id === currentUser._id;
if(isOwn) {
  api.deleteCard(card._id)
  .then(()=>{
  const newCards = cards.filter((c) => {
    return(c._id !== card._id);
  });
  setCards(newCards);
});
}
} ;

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
  function handleUpdateUser({name, about}){
    api.profileDataUpload(name, about)
    .then((res)=>{
      setCurrentUser(res);
      closeAllPopups();
    })
  }
  function handleUpdateAvatar(link){
    api.avatarUpload({link:link})
    .then((res)=>{
      console.log(res);
      setCurrentUser(res);
      closeAllPopups();
    })
  }
  function handleAddPlaceSubmit(title, link){
    api.newCardUpload(title, link)
    .then((res)=>{
      setCards([...cards, res]);
      closeAllPopups();
    })
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer/>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}/>
        {/* <PopupWithForm
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
        </PopupWithForm> */}

        <AddPlacePopup
         isOpen={isAddPlacePopupOpen}
         onClose={closeAllPopups}
         onAddPlace={handleAddPlaceSubmit}/>
        {/* <PopupWithForm
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
        </PopupWithForm> */}

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        {/* <PopupWithForm
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
        </PopupWithForm> */}

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
