import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import mts from "../../assets/mts.svg";
import "./navbar.css";

const Menu = ({ toggle }) => (
  <>
    <p>
      <a
        href="#home"
        onClick={() => {
          toggle(false);
        }}
      >
        Home
      </a>
    </p>
    <p>
      <a
        href="#about"
        onClick={() => {
          toggle(false);
        }}
      >
        About
      </a>
    </p>
    <p>
      <a
        href="#services"
        onClick={() => {
          toggle(false);
        }}
      >
        Services
      </a>
    </p>
    <p>
      <a
        href="#skills"
        onClick={() => {
          toggle(false);
        }}
      >
        Skills
      </a>
    </p>
    <p>
      <a
        href="#portfolio"
        onClick={() => {
          toggle(false);
        }}
      >
        Portfolio
      </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="mts__navbar gradient__bg">
      <div className="mts__navbar-links">
        <div className="mts__navbar-links_logo">
          <a href="#home">
            {/* <img src={mts} alt='logo' /> */}
            <h1 className="logo__tag">MTECH</h1>
          </a>
        </div>
        <div className="mts__navbar-links_container">
          <Menu toggle={setToggleMenu} />
        </div>
      </div>

      <div className="mts__navbar-contact">
        {/* <button type='button'>Contact</button> */}
        <a className="button" href="#contact">
          Contact
        </a>
      </div>

      <div className="mts__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="mts__navbar-menu_container scale-up-center">
            <div className="mts__navbar-menu_container-links">
              <Menu toggle={setToggleMenu} />
            </div>
            <div className="mts__navbar-menu_container-links-contact">
              {/* <button type='button'>Contact</button> */}
              <a
                className="button"
                href="#contact"
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
