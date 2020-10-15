import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext  from '../contexts/CurrentUserContext';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  //const currentUser= React.useContext(CurrentUserContext);
  const [title, setTitle]=React.useState('');
  const [link, setLink]=React.useState('');

  function handleTitleInput (e){
    setTitle(e.target.value);
  }
  function handleLinkInput(e){
    setLink(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    onAddPlace(title, link);
  }
  // React.useEffect(() => {
  //   setName(currentUser.name);
  //   setDescription(currentUser.about);
  // }, [currentUser]);
return(
<PopupWithForm
          title="Новое место"
          name="new-card"
          submitText="Сохранить"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <input
            value={title}
            onInput={handleTitleInput}
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
            value={link}
            onInput={handleLinkInput}
            name="link"
            className="popup__input popup__input_type_link"
            type="url"
            required
            placeholder="ссылка на картинку"
            autoComplete="off"
          />
          <span className="popup__error popup__error_type_link"></span>
        </PopupWithForm>

)
}
export default AddPlacePopup;
