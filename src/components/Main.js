import React from 'react';
import api from '../utils/Api.js';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName]=React.useState('');
    const [userDescription, setUserDescription]=React.useState('');
    const [userAvatar, setUserAvatar]=React.useState('');
    const [cards, setCards]=React.useState([]);
React.useEffect(()=>{
    const userFromServer = api.userDownload();
    const cardsFromServer = api.cardsDownload();

    const dataDownload = [userFromServer, cardsFromServer];
Promise.all(dataDownload)
    .then((data) => {
        const userData = data[0];
        setCards(data[1]);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
    });
  },[]);
    return (
        <main className="content">
          <section className="profile">
            <img src={userAvatar}  alt="фото профиля" className="profile__avatar" onClick={onEditAvatar}/>
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button className="button profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}/>
              <p className="profile__occupation">{userDescription}</p>
            </div>
            <button className="button profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}/>

          </section>
          <section>
            <ul className="cards">
              {cards.map((item)=>(
              <Card key={item._id} card={item} onCardClick={onCardClick}/>
              ))}
            </ul>
          </section>
        </main>
    );
}
export default Main;
