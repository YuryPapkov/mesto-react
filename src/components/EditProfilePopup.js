import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext  from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser= React.useContext(CurrentUserContext);
  const [name, setName]=React.useState('');
  const [description, setDescription]=React.useState('');

  function handleNameInput (e){
    setName(e.target.value);
  }
  function handleDescriptionInput(e){
    setDescription(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
return(
<PopupWithForm
          title="Редактировать профиль"
          name="edit"
          submitText="Сохранить"
          onClose={onClose}
          onSubmit={handleSubmit}
          isOpen={isOpen}
        >
          <input
            name="name"
            className="popup__input popup__input_type_name"
            type="text"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
            value={name}
            onChange={handleNameInput}
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
            value={description}
            onChange={handleDescriptionInput}
          />
          <span className="popup__error popup__error_type_occupation"></span>
        </PopupWithForm>
)
}
export default EditProfilePopup;
