import React, { useEffect, useRef } from "react";
import wines_login from "../../assests/wines_project_img.jpg";
import calculator_login from "../../assests/calculator_project_img.jpg";
import form_login from "../../assests/form_project_img.jpg";
import Button from "@mui/material/Button";
import "./Projects.css";
import { gsap } from "gsap";
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";
import { useState } from "react";

function Projects() {
  const projectsref = useRef("");
  const card1 = useRef("");
  const card2 = useRef("");
  const card3 = useRef("");
  const card4 = useRef("");

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timeline = new TimelineMax();
    // const value1 = projectsref.current;
    // const top1 = value1.getBoundingClientRect().top;
    // console.log("my as", top1);
    const scrollHandler = () => {
      const value = projectsref.current;
      const top = value.getBoundingClientRect().top;

      const canScroll = top < 499 && top > 99;
      if (!canScroll || animated) return;
      setAnimated(true);
      const height = window.innerHeight;
      value.classList.add("projectstext");
      timeline
        .fromTo(
          card1.current,
          {
            x: -1000,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 2,
            stagger: 0.5,
            ease: "back",
          }
        )
        .fromTo(
          card2.current,
          {
            x: -1000,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 2,
            ease: "back",
          },
          "<1"
        )
        .fromTo(
          card3.current,
          {
            x: -1000,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 2,
            ease: "back",
          },
          "<1"
        )
        .fromTo(
          card4.current,
          {
            x: -1000,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 2,
            ease: "back",
          },
          "<1"
        );
      window.removeEventListener("scroll", scrollHandler);
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
          <div class="card" ref={card1}>
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
          <div class="card" ref={card2}>
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
          <div class="card" ref={card3}>
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
          <div class="card" ref={card4}>
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
