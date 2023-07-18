import React from "react";
import classes from "./Skills.module.css";
import htmllogo from "../../assests/html-svg.svg";
import css3logo from "../../assests/css_png.png";
import jslogo from "../../assests/js_png.png";
import reactlogo from "../../assests/react_png.png";

function Skills() {
  return (
    <div id="skills">
      <div className={classes.skillsprogressbar}>
        <h1>SKILLS</h1>
        <div className={classes.skills}>
          <h2>HTML</h2>
          <div className={classes.flex}>
            <div className={classes.logo}>
              <img src={htmllogo} alt="" />
            </div>
            <div className={classes.progressbar}>
              <div className={classes.htmlprogress}></div>
            </div>
          </div>
          <h2>CSS</h2>
          <div className={classes.flex}>
            <div className={classes.logo}>
              <img src={css3logo} alt="" />
            </div>
            <div className={classes.progressbar}>
              <div className={classes.cssprogress}></div>
            </div>
          </div>
          <h2>JS</h2>
          <div className={classes.flex}>
            <div className={classes.logo}>
              <img src={jslogo} alt="" />
            </div>
            <div className={classes.progressbar}>
              <div className={classes.jsprogress}></div>
            </div>
          </div>
          <h2>REACT</h2>
          <div className={classes.flex}>
            <div className={classes.logo}>
              <img src={reactlogo} alt="" />
            </div>
            <div className={classes.progressbar}>
              <div className={classes.reactprogress}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
