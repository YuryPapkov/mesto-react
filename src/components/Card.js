import React from 'react';
import CurrentUserContext  from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser= React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `button card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `button card__like-button ${isLiked&& 'card__like-button_pressed'}`;
    function handleClick(){
        onCardClick(card);
    }
    function handleLike(){
      onCardLike(card);
  }
  function handleDelete(){
    onCardDelete(card);
}
    return (
        <li className="card">
          <img src={card.link} alt="" className="card__image" onClick={handleClick}/>
          <button className={cardDeleteButtonClassName} type="button" onClick={handleDelete}/>
          <div className="card__caption">
            <h2 className="card__title">{card.name}</h2>
            <div className="card__like-container">
              <button className={cardLikeButtonClassName} type="button" onClick={handleLike}/>
              <p className="card__like-counter">{card.likes.length}</p>
            </div>
          </div>
        </li>
    );
}
export default Card;
