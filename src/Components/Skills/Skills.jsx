import React from "react";
import "./Skills.css";
import html from "../../assets/html-1.svg";
import css from "../../assets/css-3.svg";
import javascript from "../../assets/logo-javascript.svg";
import material from "../../assets/material-ui-1.svg";
import reactNative from "../../assets/react-native-1.svg";
import reactLogo from "../../assets/react-2.svg";
import githubIcon from "../../assets/github-icon-1.svg";
import TailwindCss from "../../assets/tailwind-css-2.svg";
import Angular from "../../assets/angular-icon-1.svg";
import { BsGithub } from "react-icons/bs";
const Skills = () => {
  return (
    <div className="Skills">
      <div className="skills-container">
        <h1>My Skills.</h1>
        <div className="skills">
          <div className="containers">
            <li>
              <img src={html} alt="html logo" /> Html
            </li>
            <li>
              <img src={javascript} alt="javascript logo" /> Javascript
            </li>
            <li>
              {" "}
              <img src={TailwindCss} alt="Tailwind logo" />
              Tailwind
            </li>
            <li>
              <img src={material} alt="material logo" />
              Material UI
            </li>
          </div>
          <div className="containers">
            <li>
              <img src={css} alt="css logo" />
              CSS
            </li>
            <li>
              <img src={reactLogo} alt="react logo" />
              React
            </li>
            <li>
              <img src={Angular} alt="angular logo" />
              Angular
            </li>
            <li>
              <img src={reactNative} alt="react native logo" />
              React Native
            </li>
          </div>
          <div className="containers">
            <li>
              <BsGithub className="github" />
              Git/Github
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
