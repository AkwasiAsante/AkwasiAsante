import React from 'react';
import './modal.css';

const Modal = ({ setOpenModal, title, body, icon }) => {
  return (
    <div className='modal'>
      <div className='modal__container'>
        <div className='modal__icon'>{icon}</div>
        <div className='modal__container-content'>
          <h1> {title}</h1>
          <p>{body}</p>
        </div>

        <div className='modal__footer'>
          <button
            type='button'
            onClick={() => {
              setOpenModal(false);
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
