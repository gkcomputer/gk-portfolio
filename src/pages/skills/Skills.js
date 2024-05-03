import React, { useEffect, useRef } from "react";
import classes from "./Skills.module.css";
import htmllogo from "../../assests/html-svg.svg";
import css3logo from "../../assests/css_png.png";
import jslogo from "../../assests/js_png.png";
import reactlogo from "../../assests/react_png.png";
import nodelogo from "../../assests/node_js_png.png";
import expresslogo from "../../assests/express_png.png";

function Skills() {
  const skillsref = useRef("");
  const htmlref = useRef("");
  const cssref = useRef("");
  const jsref = useRef("");
  const reactref = useRef("");
  const noderef = useRef("");
  const expressref = useRef("");

  useEffect(() => {
    const scrollHandler = () => {
      const value = skillsref.current;
      const top = value.getBoundingClientRect().top;
      const height = window.innerHeight;

      if (top < height) {
        value.classList.add(classes["skillstext"]);
        htmlref.current.classList.add(classes["htmlanimation"]);
        cssref.current.classList.add(classes["cssanimation"]);
        jsref.current.classList.add(classes["jsanimation"]);
        reactref.current.classList.add(classes["reactanimation"]);
        noderef.current.classList.add(classes["nodeanimation"]);
        expressref.current.classList.add(classes["expressanimation"]);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div id="skills">
      <div className={classes.skillsprogressbar}>
        <h1 ref={skillsref}>SKILLS</h1>
        <div className={classes.skills}>
          <div className={classes.leftPanel}>
            <div className={classes.progesscontainer}>
              <h2>HTML</h2>
              <div className={classes.flex}>
                <div className={classes.logo}>
                  <img src={htmllogo} alt="" />
                </div>
                <div className={classes.progressbar}>
                  <div className={classes.htmlprogress} ref={htmlref}></div>
                </div>
              </div>
            </div>
            <div className={classes.progesscontainer}>
              <h2>CSS</h2>
              <div className={classes.flex}>
                <div className={classes.logo}>
                  <img src={css3logo} alt="" />
                </div>
                <div className={classes.progressbar}>
                  <div className={classes.cssprogress} ref={cssref}></div>
                </div>
              </div>
            </div>
            <div className={classes.progesscontainer}>
              <h2>JS</h2>
              <div className={classes.flex}>
                <div className={classes.logo}>
                  <img src={jslogo} alt="" />
                </div>
                <div className={classes.progressbar}>
                  <div className={classes.jsprogress} ref={jsref}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.rightPanel}>
            <div className={classes.progesscontainer}>
              <h2>REACT</h2>
              <div className={classes.flex}>
                <div className={classes.logo}>
                  <img src={reactlogo} alt="" />
                </div>
                <div className={classes.progressbar}>
                  <div className={classes.reactprogress} ref={reactref}></div>
                </div>
              </div>
            </div>
            <div className={classes.progesscontainer}>
              <h2>Node</h2>
              <div className={classes.flex}>
                <div className={classes.logo}>
                  <img src={nodelogo} alt="" />
                </div>
                <div className={classes.progressbar}>
                  <div className={classes.nodeprogress} ref={noderef}></div>
                </div>
              </div>
            </div>
            <div className={classes.progesscontainer}>
              <h2>Express</h2>
              <div className={classes.flex}>
                <div className={classes.logo}>
                  <img src={expresslogo} alt="" />
                </div>
                <div className={classes.progressbar}>
                  <div
                    className={classes.expressprogress}
                    ref={expressref}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
