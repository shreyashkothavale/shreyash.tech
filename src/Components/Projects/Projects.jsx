import React from "react";
import "./Projects.css";
import Ecom from "../../assets/Ecom.png";
import searchTheImage from "../../assets/searchtheimage.png";
import WeatherImage from "../../assets/WeatherForecast.png";
import TasksApp from "../../assets/Tasks-app.png";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
const Projects = () => {
  return (
    <div className="Projects">
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects">
          <div className="container">
            <img src={Ecom} alt="" />
            <div className="details">
              <h2>Ecom.in</h2>
              <p>
                Ecom.in is a fashion e-commerce website that was created using
                React and Redux. The goal was to build a seamless and visually
                appealing online shopping experience for fashion enthusiasts. To
                achieve this, I used React's component-based architecture and
                Redux's predictable state management to create a dynamic and
                responsive website that is easy to navigate and use.
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/shreyashkothavale/Ecom.in"
                  target="_blank"
                >
                  Code
                  <span>
                    <BsGithub />
                  </span>
                </a>
                <a
                  href="https://shreyashkothavale.github.io/Ecom.in/"
                  target="_blank"
                >
                  Live Preview
                  <span className="arroup">
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="details">
              <h2>Image Searching</h2>
              <p>
                This is a website that allows users to search for images and
                view the results. The website retrieves the images from the
                Pixabay API and displays them in a grid.The website has a search
                bar that allows users to enter search queries for images.he
                website displays the search results as a grid of images, with
                each image having author name.The app utilizes React for the
                frontend, which provides a responsive and dynamic user
                interface, and Tailwind CSS for styling the components.
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/shreyashkothavale/Photo-Search-App"
                  target="_blank"
                >
                  Code
                  <span>
                    <BsGithub />
                  </span>
                </a>
                <a href="https://searchtheimage.netlify.app/" target="_blank">
                  Live Preview
                  <span className="arroup">
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
            <img src={searchTheImage} alt="" />
          </div>
          <div className="container">
            <img src={WeatherImage} alt="" />
            <div className="details">
              <h2>Weather Forecast</h2>
              <p>
                The Weather Forecast is a web application that provides users
                with real-time weather information for a given location. The app
                utilizes the OpenWeatherMap API to retrieve weather data and
                displays it in a user-friendly way. this app shows temperature,
                humidity, wind speed, and weather condition using your current
                location.The app also provides a five-day weather forecast for
                the selected location.
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/shreyashkothavale/Weather-App"
                  target="_blank"
                >
                  Code
                  <span>
                    <BsGithub />
                  </span>
                </a>
                <a
                  href="https://weather-forecast-location.netlify.app/"
                  target="_blank"
                >
                  Live Preview
                  <span className="arroup">
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="details">
              <h2>Tasks App</h2>
              <p>
                The Task App is a user-friendly productivity tool designed to
                users for their daily tasks and to stay organized. Built with
                React and Framer Motion library for animations, the app provides
                a seamless and interactive user experience. With the Task App,
                users can easily create and prioritize their to-do lists. The
                app's intuitive interface allows users to add new tasks quickly
                and efficiently.
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/shreyashkothavale/tasks-app"
                  target="_blank"
                >
                  Code
                  <span>
                    <BsGithub />
                  </span>
                </a>
                <a
                  href="https://shreyashkothavale.github.io/tasks-app/"
                  target="_blank"
                >
                  Live Preview
                  <span className="arroup">
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
            <img src={TasksApp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
