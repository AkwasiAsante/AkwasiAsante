import React from 'react';

import major from '../../assets/major.png';
import people from '../../assets/people.png';
import './header.css';
import resume from '../../assets/cv/resume.pdf';
import { FaDownload } from 'react-icons/fa';

const handleScroll = () => {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0,
    behavior: 'smooth',
  });
};

const Header = () => {
  return (
    <div className='mts__header section__padding' id='home'>
      <div className='mts__header-content'>
        <h1 className='gradient__text'>I am Gideon Asante</h1>
        <p>
          Hi, I am Gideon Asante, thanks for visiting my profile page. I'm a
          professional web developer (MERN/Full Stack Developer) and also a
          Software Developer with passion and experience in this field. I love
          learning, researching and implementing according to time. Hire me
          anytime and anywhere in the world.
        </p>
        <div className='mts__header-content__input'>
          {/* <input type='email' placeholder='Your Email here' /> */}
          {/* <button type='button' onClick={handleScroll}>
            Hire Me
          </button> */}
          <a
            href={resume}
            download={'Asante_Resume.pdf'}
            className='mts__header-resume'
          >
            <FaDownload />
            Resume
          </a>
          <a href='#contact' className='mts__header-hireme'>
            Hire Me
          </a>
        </div>
        <div className='mts__header-content__world'>
          <img src={people} alt='people' />
          <p>Connect anytime and anywhere in the world.</p>
        </div>
      </div>
      <div className='mts__header-image gradient__back'>
        <img src={major} alt='ai' />
      </div>
    </div>
  );
};

export default Header;
