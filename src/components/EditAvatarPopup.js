import React from 'react';
import PopupWithForm from './PopupWithForm';
//import CurrentUserContext  from '../contexts/CurrentUserContext';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarRef=React.useRef();
  //const currentUser= React.useContext(CurrentUserContext);

  function handleSubmit(e){
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  }
  // React.useEffect(() => {
  //   setName(currentUser.name);
  //   setDescription(currentUser.about);
  // }, [currentUser]);
return(
<PopupWithForm
          title="Обновить аватар"
          name="avatar"
          submitText="Сохранить"
          onClose={onClose}
          onSubmit={handleSubmit}
          isOpen={isOpen}
        >
          <input
            ref={avatarRef}
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
export default EditAvatarPopup;
