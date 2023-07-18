import React from "react";
import "./LandingPage.css";
import profile from "../../assests/profile_pic.jpg";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";
import { Typewriter } from "react-simple-typewriter";
import { Tilt } from "react-tilt";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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
          duration: 1.5,
          x: 30,
          opacity: 1,
          ease: "bounce",
          stagger: 0.5,
        }
      )
      .fromTo(
        n,
        { x: 90, scale: 1, opacity: 0 },
        { x: 0, opacity: 1, ease: "back", duration: 1.5 },
        "<1"
      )
      .fromTo(
        dev,
        { x: -90, scale: 1, opacity: 0 },
        { x: 0, opacity: 1, ease: "back", duration: 1.5 },
        "<1"
      )
      .fromTo(
        p,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "bounce" },
        "<1"
      )
      .fromTo(
        bton,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "bounce" },
        "<1"
      )
      .fromTo(
        prof.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, ease: "elastic", duration: 1.5 },
        "<"
      );
  });

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
      <div id="home" className="landingdiv">
        <div className="about-image">
          <div className="details">
            <div ref={name} className="name">
              <h1>
                Hi I'm <span>Krishna</span>
              </h1>
            </div>
            <div ref={developer} className="developer">
              <p>
                FrontEnd Dev :{" "}
                <span>
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
              High level experience in web desgin and development knowledge,
              producing quality work.
            </div>
            <div ref={button} className="contactme">
              <button class="btn">
                <a href="#contact">
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
                </a>
              </button>
            </div>
            <div className="socialIcons">
              <GitHubIcon
                onClick={() => {
                  window.open("https://github.com/gkcomputer");
                }}
                ref={(el) => (social.current[0] = el)}
                sx={{
                  color: "rgb(16,204,254)",
                  position: "unset",
                }}
              />

              <LinkedInIcon
                ref={(el) => (social.current[1] = el)}
                sx={{ color: "rgb(16,204,254)", position: "unset" }}
              />

              <EmailIcon
                onClick={() => {
                  window.open(
                    "https://mail.google.com/mail/u/0/?ogbl#inbox?compose=GTvVlcSBncMdTcSwDJkXKRsmrlMcJhjNSBKgTgKlcFrqHGdZjWPZmRQWbZjGPQbbXBVSWBCHVhPlg"
                  );
                }}
                ref={(el) => (social.current[2] = el)}
                sx={{ color: "rgb(16,204,254)", position: "unset" }}
              />
            </div>
          </div>

          <div ref={prof} className="profile-picture">
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
