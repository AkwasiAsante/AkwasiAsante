import React from "react";
import "./about.css";
// import major from '../../assets/major.png';
import ai from "../../assets/ai.png";
import { FaUserAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

const About = () => {
  return (
    <div className="mts__about section__padding about__gradient" id="about">
      <div className="mts__about-image">
        <img src={ai} alt="major1" />
      </div>
      <div className="mts__about-content">
        <h4>Know Something About Gideon</h4>
        <h1 className="gradient__text">About Me</h1>
        <p>
          I am Gideon Asante, a software & Web Developer who uses modern
          technologies in developing web and software applications. I love to
          design and build websites, applications, mobile solutions and other
          awesome digital media.
        </p>
        <div className="mts__about-details">
          <div className="mts__about-details_top">
            <p>
              <FaUserAlt />
              Gideon Asante
            </p>
            <a
              href="https://wa.me/+233505889829"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <BsWhatsapp />
                +233 505 889 829
              </p>
            </a>
          </div>
          <div className="mts__about-details_top">
            <a
              href="mailto: mtechsolutions2000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <MdAlternateEmail />
                mtechsolutions2000@gmail.com
              </p>
            </a>

            <p>
              <FiPhoneCall />
              +233 554 169 115
            </p>
          </div>
        </div>
        <h4>Get In Touch Now</h4>
      </div>
    </div>
  );
};

export default About;
