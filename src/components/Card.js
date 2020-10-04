import React from 'react';

function Card({card, onCardClick}) {
    function handleClick(){
        onCardClick(card);
    }

    return (
        <li key={card._id} className="card">
                <img src={card.link} alt="" className="card__image" onClick={handleClick}/>
                <button className="button card__delete-button" type="button"/>
                <div className="card__caption">
                  <h2 className="card__title">{card.name}</h2>
                  <div className="card__like-container">
                    <button className="button card__like-button" type="button"/>
                    <p className="card__like-counter">{card.likes.length}</p>
                  </div>
                </div>
              </li>
    );
}
export default Card;