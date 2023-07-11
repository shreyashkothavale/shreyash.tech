import React from "react";
import "./Footer.css";
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <div className="form-container">
        <div className="icons">
          <a href="https://www.linkedin.com/in/shreyas-kothavale-068164228/">
            <FaLinkedin size={25} />
          </a>

          <a href="https://twitter.com/ShreyashKothav2?t=83GBrlWWN8cuAfTQciUHaw&s=08">
            <FaTwitter size={25} />
          </a>
          <a href="https://www.instagram.com/shreyashjan18/">
            <FaInstagram size={25} />
          </a>
          <a href="mailto:shreyaskothavale01@gmail.com">
            <FaEnvelope size={25} />
          </a>
        </div>

        <p>
          Made with <span>❤ </span> by Shreyas
        </p>
        <div className="gotohome">
          <Link to="home" smooth={true} duration={500}>
            <FiArrowUp size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
