import React from 'react';
import CurrentUserContext  from '../contexts/CurrentUserContext';
import api from '../utils/Api.js';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {
  const currentUser= React.useContext(CurrentUserContext);
    //const [cards, setCards]=React.useState([]);
// React.useEffect(()=>{
//     const userFromServer = api.userDownload();
//     const cardsFromServer = api.cardsDownload();

//     const dataDownload = [userFromServer, cardsFromServer];
// Promise.all(dataDownload)
//     .then((data) => {
//         const userData = data[0];
//         setCards(data[1]);
//     });
//   },[]);
//   function handleCardLike  (card) {
//     const isLiked = card.likes.some(i => i._id === currentUser._id);
//     api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
//       console.log(newCard);
//       const newCards = cards.map((c) => c._id === card._id ? newCard : c);
//       setCards(newCards);
//     });
// } ;
// function handleCardDelete  (card) {
//   const isOwn = card.owner._id === currentUser._id;
//   if(isOwn) {
//     api.deleteCard(card._id)
//     .then(()=>{
//     const newCards = cards.filter((c) => {
//       return(c._id !== card._id);
//     });
//     setCards(newCards);
//   });
//   }
// } ;
    return (
        <main className="content">
          <section className="profile">
            <img src={currentUser.avatar}  alt="фото профиля" className="profile__avatar" onClick={onEditAvatar}/>
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="button profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}/>
              <p className="profile__occupation">{currentUser.about}</p>
            </div>
            <button className="button profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}/>

          </section>
          <section>
            <ul className="cards">
              {cards.map((item)=>(
              <Card
              key={item._id}
              card={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}/>
              ))}
            </ul>
          </section>
        </main>
    );
}
export default Main;
