import {
  faFacebook,
  faGit,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="logo">
        <h1>mateusz</h1>
        <h1>kleszcz</h1>
      </div>
      <div className="social-links">
        <div className="row">
          <FontAwesomeIcon icon={faLinkedin} />
          <a href="#">Mateusz Kleszcz</a>
        </div>
        <div className="row">
          <FontAwesomeIcon icon={faGithub} />
          <a href="https://github.com/mateusz-kleszcz" target="_blank">
            mateusz-kleszcz
          </a>
        </div>
        <div className="row">
          <FontAwesomeIcon icon={faFacebook} />
          <a href="#">Mateusz Kleszcz</a>
        </div>
      </div>
      <div className="contact">
        <div className="row">
          <FontAwesomeIcon icon={faLocationArrow} />
          <p>Poland, Cracow</p>
        </div>
        <div className="row">
          <FontAwesomeIcon icon={faPhone} />
          <p>+48 537 396 934</p>
        </div>
        <div className="row">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>mateusz.kacper.kleszcz@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
