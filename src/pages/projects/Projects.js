import React from "react";
import wines_login from "../../assests/wines_project_img.jpg";
import calculator_login from "../../assests/calculator_project_img.jpg";
import form_login from "../../assests/form_project_img.jpg";
import Button from "@mui/material/Button";
import "./Projects.css";

function Projects() {
  return (
    <body>
      <div class="projectcontainer">
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
    </body>
  );
}

export default Projects;
