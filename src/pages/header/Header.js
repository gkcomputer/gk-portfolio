import React, { useState } from "react";
import "./Header.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import logo from "../../assests/gk_logo.png";
import TemporaryDrawer from "./Headsidenav";

//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
function Header() {
  let header = useRef(null);
  let menu = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      header,

      {
        x: 400,
        scale: 2,
        opacity: 0,
      },
      { x: 30, ease: "back", scale: 1, opacity: 1, duration: 1.5 }
    );
    gsap.fromTo(
      menu.current,

      { x: 200, scale: 2, opacity: 0 },
      { x: 10, scale: 1, opacity: 1, ease: "back", duration: 1.5 }
    );
  }, []);

  return (
    <>
      <div className="head">
        <img
          ref={(el) => {
            header = el;
          }}
          src={logo}
          alt=""
          className="logo"
        ></img>

        <div class="menu">
          <a
            href="#about"
            ref={(el) => {
              menu.current[0] = el;
            }}
          >
            About
          </a>
          <a
            href="#education"
            ref={(el) => {
              menu.current[1] = el;
            }}
          >
            Education
          </a>
          <a
            href="#skills"
            ref={(el) => {
              menu.current[2] = el;
            }}
          >
            Skills
          </a>
          <a
            href="#projects"
            ref={(el) => {
              menu.current[3] = el;
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            ref={(el) => {
              menu.current[4] = el;
            }}
          >
            Contact
          </a>
        </div>
        <div className="burgerdiv">
          <TemporaryDrawer />
        </div>
      </div>
    </>
  );
}

export default Header;
