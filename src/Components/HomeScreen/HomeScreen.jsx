import React from "react";
import "./Homescreen.css";
import profileImg from "../../assets/MyImage.png";
import { Link } from "react-scroll";
import Resume from "../../assets/Shreyas Resume 2024.pdf";
const HomeScreen = () => {
  return (
    <div className="homescreen">
      <div className="homescreen-container">
        <div className="heading">
          <p>👋 Hi, I am Shreyas Kothavale.</p>
          <h1>Front-End Developer</h1>
          <p>
            A self-motivated frontend web developer from
            Maharashtra,India.Interested in exploring things, I like to work on
            exciting projects.
          </p>
          <div className="contact-links">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="contactbtn"
            >
              Contact Me
            </Link>
            <a href={Resume} target="_blank" download className="resumeBtn">
              Resume
            </a>
          </div>
        </div>
        <div className="profile">
          <img src={profileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
