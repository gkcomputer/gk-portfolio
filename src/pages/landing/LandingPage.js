import React from "react";
import github from "../../assests/Github-desktop.svg";
import linkedin from "../../assests/LinkedIn_icon.svg";
import mail from "../../assests/Gmail_icon.svg";
import "./LandingPage.css";
import profile from "../../assests/profile_pic.jpg";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";
import { Typewriter } from "react-simple-typewriter";
import { Tilt } from "react-tilt";

gsap.registerPlugin(CSSPlugin);

function LandingPage() {
  let social = useRef([]);
  const name = useRef(null);
  const developer = useRef(null);
  const para = useRef(null);
  const button = useRef(null);
  const prof = useRef(null);
  useEffect(() => {
    const icons = social.current;
    const n = name.current;
    const dev = developer.current;
    const p = para.current;
    const bton = button.current;
    const timeline = new TimelineMax();
    timeline
      .fromTo(
        icons,
        { x: -10, scale: 1, opacity: 0 },
        {
          duration: 2,
          x: 30,
          opacity: 1,
          ease: "bounce",
          stagger: 0.5,
        }
      )
      .fromTo(
        n,
        { x: 90, scale: 1, opacity: 0 },
        { x: 0, opacity: 1, ease: "back", duration: 2 },
        "<1"
      )
      .fromTo(
        dev,
        { x: -90, scale: 1, opacity: 0 },
        { x: 0, opacity: 1, ease: "back", duration: 2 },
        "<1"
      )
      .fromTo(
        p,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "bounce" },
        "<1"
      )
      .fromTo(
        bton,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "bounce" },
        "<1"
      )
      .fromTo(
        prof.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, ease: "elastic", duration: 2 },
        "<"
      );
  });

  // const flipCover = (event) => {
  //   const pic = prof.current;
  //   if (event === "enter") {
  //     gsap.to(pic, { rotationY: -360, duration: 5 });
  //   } else {
  //     gsap.to(pic, { rotationY: 360, duration: 5 });
  //   }
  // };

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 40, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <>
      <div className="landingdiv">
        <div className="about-image">
          <div className="details">
            <div ref={name} className="name">
              <h1>
                Hi I'm <span style={{ color: "rgb(54,77,121)" }}>Krishna</span>
              </h1>
            </div>
            <div ref={developer} className="developer">
              <p>
                FrontEnd Dev :{" "}
                <span style={{ fontWeight: "bold", color: "rgb(54,77,121)" }}>
                  <Typewriter
                    words={["HTML", "CSS", "JAVA SCRIPT", "REACT"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    delaySpeed={1000}
                    deleteSpeed={50}
                  />
                </span>
              </p>
            </div>
            <div ref={para} className="intro">
              <p>
                High level experience in web desgin and development knowledge,
                producing quality work.
              </p>
            </div>
            <div ref={button} className="contactme">
              <button class="btn">
                <svg
                  width="180px"
                  height="60px"
                  viewBox="0 0 180 60"
                  class="border"
                >
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="bg-line"
                  />
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    class="hl-line"
                  />
                </svg>
                <span>CONTACT ME</span>
              </button>

              <div className="socialIcons">
                <img
                  ref={(el) => (social.current[0] = el)}
                  src={github}
                  alt=""
                  width="20px"
                  onMouseEnter={(el) => {
                    gsap.to(el.current, { scale: 1 });
                  }}
                />
                <img
                  ref={(el) => (social.current[1] = el)}
                  src={linkedin}
                  alt=""
                  width="20px"
                />
                <img
                  ref={(el) => (social.current[2] = el)}
                  src={mail}
                  alt=""
                  width="20px"
                />
              </div>
            </div>
          </div>

          <div
            ref={prof}
            // onMouseEnter={() => {
            //   flipCover("enter");
            // }}
            // onMouseLeave={() => {
            //   flipCover("leave");
            // }}
            className="profile-picture"
          >
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <img src={profile} alt="" width="200px" />
            </Tilt>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
