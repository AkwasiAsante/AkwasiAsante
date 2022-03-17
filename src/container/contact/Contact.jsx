import React, { useRef, useState } from 'react';
import './contact.css';
import loginImg from '../../assets/img-login.svg';
import { AiOutlineMail } from 'react-icons/ai';
import { RiSendPlaneFill } from 'react-icons/ri';
import { BsCheckCircle } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { Rings } from 'react-loader-spinner';

const ModalForm = ({ setOpenModal, title, body, icon }) => (
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

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        'service_68b2rbu',
        'template_40f4ats',
        form.current,
        'user_aaKmnrXANreuXuzHpiwS7'
        // process.env.EMAIL_SERVICE_KEY,
        // process.env.EMAIL_SERVICE_TEMPLATE,
        // form.current,
        // process.env.EMAIL_SERVICE_USER
      )
      .then(
        (result) => {
          console.log(result.text);
          setSending(false);
          setOpenModal(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setSending(false);
        }
      );
  };

  const ContactForm = () => (
    <>
      <form
        // id='myform'
        ref={form}
        onSubmit={sendEmail}
        className='mts__contact-create'
      >
        <h1 className='mts__contact-title'>
          Contact Me <AiOutlineMail />
        </h1>

        <div className='mts__contact-box'>
          <i className='mts__contact-icon'></i>
          <input
            type='text'
            name='name'
            className='mts__contact-input'
            placeholder='Full Name'
            required
          />
        </div>
        <div className='mts__contact-box'>
          <i className='mts__contact-icon'></i>
          <input
            type='tel'
            name='contact'
            className='mts__contact-input'
            placeholder='Mobile Number'
            required
          />
        </div>
        <div className='mts__contact-box'>
          <i className='mts__contact-icon'></i>
          <input
            type='email'
            name='email'
            className='mts__contact-input'
            placeholder='Email Address'
            required
          />
        </div>
        <div className='mts__contact-box_textarea'>
          <i className='mts__contact-icon'></i>
          <textarea
            name='message'
            className='mts__contact-textarea'
            placeholder='Your message here.......'
            required
          ></textarea>
        </div>
        <div className='mts__contact-groupbutton'>
          {!sending && (
            <button
              type='submit'
              // form='myform'
              className='mts__contact-button'
            >
              <RiSendPlaneFill />
              Send
            </button>
          )}
          {sending && (
            <Rings type='Rings' color='#5ac994' height={80} width={80} />
          )}
        </div>
      </form>
    </>
  );

  return (
    <div className='mts__contact section__padding' id='contact'>
      <div className='mts__contact-content'>
        <div className='mts__contact-img'>
          <h1 className='mts__contact-heading'>Lets's discuss your project</h1>
          <img src={loginImg} alt='loginImg' />
        </div>
        <div className='mts__contact-forms'>
          {!openModal && <ContactForm />}

          {openModal && (
            <ModalForm
              setOpenModal={setOpenModal}
              title='Thank You !'
              body="Message sent successfully, I'll respond as soon as possible :)"
              icon={<BsCheckCircle />}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
