import React, { useEffect, useRef } from "react";
import wines_login from "../../assests/wines_project_img.jpg";
import calculator_login from "../../assests/calculator_project_img.jpg";
import form_login from "../../assests/form_project_img.jpg";
import Button from "@mui/material/Button";
import "./Projects.css";
import wine_store from "../../assests/wine_store_landingPage.jpg";
import crud from "../../assests/Crud_Landing_Page.jpg";
import portfolio from "../../assests/portfolio_landing.jpg";

function Projects() {
  const projectsref = useRef("");
  const cardsref = useRef("");
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
        <div class="projectcontainer" ref={cardsref}>
          <div class="card">
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
                  <Button variant="outlined">Code</Button>
                  <Button variant="outlined">Demo</Button>
                </div>
              </div>
            </div>
          </div>
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
                  This is a crud application where you can add, edit and delete
                  products in your cart. You have an option of adding product by
                  clicking on plus
                </p>
                <div class="face2buttons">
                  <Button variant="outlined">Code</Button>
                  <Button variant="outlined">Demo</Button>
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
                  This portfolio website has been made using react js which
                  makes it more interactive as compared with static websites
                  like html/css/Javascript/React. It also uses material ui for
                  styling.
                </p>
                <div class="face2buttons">
                  <Button variant="outlined">Code</Button>
                  <Button variant="outlined">Demo</Button>
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
