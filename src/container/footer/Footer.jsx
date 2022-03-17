import React from 'react';
import './footer.css';
import { MdComputer } from 'react-icons/md';
import { BsLaptop } from 'react-icons/bs';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mts__footer section__padding'>
      <div className='mts__footer-links'>
        <div className='mts__footer-links_logo'>
          <a href='#home'>
            <MdComputer />
          </a>
          <p>
            Buduburam Zone 12, <br /> All Rights Reserved
          </p>
        </div>
        <div className='mts__footer-links_div'>
          <h4>Links</h4>

          <p>
            <a href='#about'>About</a>
          </p>
          <p>
            <a href='#service'>Service</a>
          </p>
          <p>
            <a href='#skills'>Skills</a>
          </p>
          <p>
            <a href='#portfolio'>Portfolio</a>
          </p>
          <p>
            <a href='#contact'>Contact</a>
          </p>
        </div>
        <div className='mts__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
        </div>
        <div className='mts__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Akwasi Asante</p>
          <p>+233 243 860 216</p>
          <p>mtechsolutions2000@gmail.com</p>
        </div>
      </div>

      <div className='mts__footer-socials'>
        <p>Social Media</p>
        <div className='mts__footer-social'>
          <a
            href='https://facebook.com/mordecai.asante'
            target='_blank'
            rel='noopener noreferrer'
            className='mts__footer-social-icon'
          >
            <BsFacebook />
          </a>
          <a
            href='https://instagram.com/major_akwasi_asante'
            target='_blank'
            rel='noopener noreferrer'
            className='mts__footer-social-icon'
          >
            <BsInstagram />
          </a>
          <a
            href='https://linkedin.com/in/gideon-asante-560411134'
            target='_blank'
            rel='noopener noreferrer'
            className='mts__footer-social-icon'
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className='mts__footer-copyright'>
        <p>@2022 MTech Solutions. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
