import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import './modal.css';

const Modal = ({ setOpenModal, title, body, icon }) => {
  return (
    <div className='modal__container'>
      <div className='modal__content'>
        {/* <div className='modal1__close' title='close'>
          <RiCloseLine
            onClick={() => {
              setOpenModal(false);
            }}
          />
        {/* </div> */}

        {icon}
        {/* <img src={icon} alt='icon' /> */}
        <h1 className='modal__title'>{title}</h1>
        <p className='modal__description'>{body}</p>

        <button
          className='modal__button modal__button-view'
          onClick={() => {
            setOpenModal(false);
          }}
        >
          OK
        </button>
        {/* <button
          className='modal1__button-link close-modal'
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default Modal;
