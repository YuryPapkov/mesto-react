import React from 'react';
import closeButtonPath from '../images/close-icon.svg';

function PopupWithForm({title,name,submitText, isOpen, onClose, children}) {
    const className=`popup popup_type_${name} ${isOpen&& 'popup_opened'}`;
    //console.log(children);
    return (
        <div className={className}>
          <form name={name} action="#" className="popup__container popup__container_type_input" novalidate>
            <p className="popup__text">{title}</p>
            {children}
            <button type="submit" className="button popup__save-button">{submitText}</button>
            <button type="reset" className="button popup__close-button popup__close-button_type_input" onClick={onClose}><img src={closeButtonPath} alt="закрыть" /></button>
          </form>
        </div>
    );
}
export default PopupWithForm;