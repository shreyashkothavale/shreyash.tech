import React from "react";
import "./about.css";
import AboutImg from "../../assets/clement-helardot-95YRwf6CNw8-unsplash.jpg";
const About = () => {
  return (
    <div className="About">
      <div className="about-container">
        <div className="container">
          <img src={AboutImg} alt="" />
          <div className="about-me">
            <h1>About Me</h1>
            <p>
              Hi I am Shreyas Kothavale,a 23 year old Front-End developer living
              in Mahrashtra,India I am a Computer Science graduate Have a look
              at my Projects, I am always excited in exploring things and
              learning new things. As a skilled front-end developer with
              expertise in Html,css,javascript,React and Angular I am dedicated
              to creating seamless, visually appealing, and user-friendly
              websites and applications. With a keen eye for detail, I ensure
              that every aspect of my projects is pixel-perfect and optimized
              for optimal user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
