import React, { useEffect, useRef } from "react";
import wines_login from "../../assests/wines_project_img.jpg";
import calculator_login from "../../assests/calculator_project_img.jpg";
import form_login from "../../assests/form_project_img.jpg";
import Button from "@mui/material/Button";
import "./Projects.css";

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
                <img src={wines_login} />
                <h3>Store</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cum cumque minus iste veritatis provident at.
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
                <img src={calculator_login} />
                <h3>Calculator</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cum cumque minus iste veritatis provident at.
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
                <img src={form_login} />
                <h3>Form</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cum cumque minus iste veritatis provident at.
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
                <img src={form_login} />
                <h3>Form</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  cum cumque minus iste veritatis provident at.
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
