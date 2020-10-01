import React from 'react';
//import logoPath from '../images/logo.svg';   vvv

function Main() {

    function handleEditAvatarClick () {
        document.querySelector('.popup_type_avatar').classList.add('popup_opened');

    };
    function handleEditProfileClick  () {
        document.querySelector('.popup_type_edit').classList.add('popup_opened');
    };
    function handleAddPlaceClick ()  {
        document.querySelector('.popup_type_new-card').classList.add('popup_opened');
    };

    return (
        <main className="content">
          <section className="profile">
            <img src="./images/avatar.jpg" alt="фото профиля" className="profile__avatar" onClick={handleEditAvatarClick}/>
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="button profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={handleEditProfileClick}></button>
              <p className="profile__occupation">Исследователь океана</p>
            </div>
            <button className="button profile__add-button" type="button" aria-label="Добавить" onClick={handleAddPlaceClick}></button>

          </section>
          <section>
            <ul className="cards">

            </ul>
          </section>
        </main>
    );
}
export default Main;