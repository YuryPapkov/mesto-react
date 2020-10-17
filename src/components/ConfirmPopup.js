import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup({ isOpen, onClose, onConfirm }) {


  function handleSubmit(e) {
    e.preventDefault();
    onConfirm();
  }
  return (
    <PopupWithForm
      title="Вы уверены?"
      name="confirm"
      submitText="да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
    </PopupWithForm>
  )
}
export default ConfirmPopup;
