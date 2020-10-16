import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img src={currentUser.avatar} alt="фото профиля" className="profile__avatar" onClick={onEditAvatar} />
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="button profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile} />
          <p className="profile__occupation">{currentUser.about}</p>
        </div>
        <button className="button profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace} />

      </section>
      <section>
        <ul className="cards">
          {cards.map((item) => (
            <Card
              key={item._id}
              card={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete} />
          ))}
        </ul>
      </section>
    </main>
  );
}
export default Main;
