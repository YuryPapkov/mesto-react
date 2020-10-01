import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//import './App.css';

function App() {
  return (
    <div classNameName="App">
      <div className="body">
        <Header/>
        <Main/>
        <Footer/>
        
        <div className="popup popup_type_edit">
          <form name="edit" action="#" className="popup__container popup__container_type_input" novalidate>
            <p className="popup__text">Редактировать профиль</p>
            <input name="name" className="popup__input popup__input_type_name" type="text" required minlength="2" maxlength="40" autocomplete="off" />
            <span className="popup__error popup__error_type_name"></span>
            <input name="occupation" className="popup__input popup__input_type_occupation" type="text" required minlength="2" maxlength="200" autocomplete="off" />
            <span className="popup__error popup__error_type_occupation"></span>
            <button type="submit" className="button popup__save-button">Сохранить</button>
            <button type="reset" className="button popup__close-button popup__close-button_type_input"><img src="./images/close-icon.svg" alt="закрыть" /></button>
          </form>
        </div>

        <div className="popup popup_type_new-card">
          <form name="new-card" action="#" className="popup__container popup__container_type_input" novalidate>
            <p className="popup__text">Новое место</p>
            <input name="place" className="popup__input popup__input_type_place" type="text" placeholder="название" required minlength="1" maxlength="30" autocomplete="off" />
            <span className="popup__error popup__error_type_place"></span>
            <input name="link" className="popup__input popup__input_type_link" type="url" required placeholder="ссылка на картинку" required autocomplete="off" />
            <span className="popup__error popup__error_type_link"></span>
            <button type="submit" className="button popup__save-button">Сохранить</button>
            <button type="reset" className="button popup__close-button popup__close-button_type_input"><img src="./images/close-icon.svg" alt="закрыть" /></button>
          </form>
        </div>

        <div className="popup popup_type_confirm">
          <form name="new-card" action="#" className="popup__container popup__container_type_input" novalidate>
            <p className="popup__text">Вы уверены?</p>
            <button type="submit" className="button popup__save-button">Да</button>
            <button type="reset" className="button popup__close-button popup__close-button_type_input"><img src="./images/close-icon.svg" alt="закрыть" /></button>
          </form>
        </div>
        <div className="popup popup_type_avatar">
          <form name="avatar" action="#" className="popup__container popup__container_type_input" novalidate>
            <p className="popup__text">Обновить аватар</p>
            <input name="link" className="popup__input popup__input_type_link" type="url" required placeholder="ссылка на картинку" required autocomplete="off" />
            <span className="popup__error popup__error_type_link"></span>
            <button type="submit" className="button popup__save-button">Сохранить</button>
            <button type="reset" className="button popup__close-button popup__close-button_type_input"><img src="./images/close-icon.svg" alt="закрыть" /></button>
          </form>
        </div>

        <div className="popup popup_type_image">
          <div className="popup__container popup__container_type_picture">
            <button className="button popup__close-button popup__close-button_type_picture" type="reset"><img src="./images/close-icon.svg" alt="закрыть" /></button>
            <img src="#" alt="" className="popup__image" />
            <p className="popup__subtitle"></p>
          </div>
        </div>

        <div className="popup popup_type_error">
          <p className="popup__message"></p>
        </div>

        <template id="place">
          <li className="card">
            <img src="#" alt="" className="card__image" />
            <button className="button card__delete-button" type="button"></button>
            <div className="card__caption">
              <h2 className="card__title"></h2>
              <div className="card__like-container">
                <button className="button card__like-button" type="button"></button>
                <p className="card__like-counter">12512</p>
              </div>

            </div>
          </li>
        </template>
      </div>
    </div>
  );
}

export default App;
