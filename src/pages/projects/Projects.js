import React, { useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import "./Projects.css";
import wine_store from "../../assests/wine_store_landingPage.jpg";
import crud from "../../assests/Crud_Landing_Page.jpg";
import portfolio from "../../assests/portfolio_landing.jpg";

function Projects() {
  const projectsref = useRef("");
  const cardsref = useRef();

  useEffect(() => {
    const scrollHandler = () => {
      const value = projectsref.current;
      const top = value.getBoundingClientRect().top;
      const height = window.innerHeight;

      if (top < height) {
        value.classList.add("projectstext");
        cardsref.current.classList.add("projectsslide");
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div id="projects">
      <div className="projectdiv">
        <h1 ref={projectsref}>PROJECTS</h1>
        <div class="projectcontainer">
          <div class="card">
            <div class="face face1">
              <div class="content">
                <img src={crud} alt="crud" />
                <h3>CRUD</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  This is a CRUD application that allows you to perform actions
                  like adding, editing, deleting, and reading user details. You
                  can add new users, edit existing ones, and delete users as
                  needed.
                </p>
                <div class="face2buttons">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      window.open("https://github.com/gkcomputer/CRUD");
                    }}
                  >
                    Code
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      window.open("https://crud-project-35f4d.web.app/");
                    }}
                  >
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <img src={portfolio} alt="portfolio" />
                <h3>PORTFOLIO</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  This portfolio website is built using React.js, enhancing
                  interactivity compared to static websites created with HTML,
                  CSS, and JavaScript. It features stylish design elements
                  thanks to the use of Material UI for styling.
                </p>
                <div class="face2buttons">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      window.open("https://github.com/gkcomputer/gk-portfolio");
                    }}
                  >
                    Code
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      window.open("/");
                    }}
                  >
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div class="card" ref={cardsref}>
            <div class="face face1">
              <div class="content">
                <img src={wine_store} alt="store landing page" />
                <h3>STORE</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  This is a simple e-commerce replica. I used api get to fetch
                  the data from backend.
                </p>
                <div class="face2buttons">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      window.open("https://github.com/gkcomputer/Winestore");
                    }}
                  >
                    Code
                  </Button>
                  <Button variant="outlined" disabled>
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
