import { useRef, useEffect, useState } from "react";
import "./About.css";

export const About = () => {
  const paraRef = useRef("");
  const textRef = useRef("");
  useEffect(() => {
    const scrollHandler = () => {
      const value = textRef.current;
      const top = value.getBoundingClientRect().top;
      const height = window.innerHeight;

      if (top < height) {
        paraRef.current.classList.add("para");
        textRef.current.classList.add("text");
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div id="about" className="aboutdiv">
      <div className="aboutText" ref={textRef}>
        <h1>ABOUT</h1>
      </div>

      <div className="paragraph" ref={paraRef}>
        I am a highly motivated and dedicated professional with a passion for
        Developing Applications. With 3.5 years of experience in IT feild, I
        possess a solid understanding of Frontend technologies. I am committed
        to delivering exceptional results and thrive in fast-paced and
        challenging environments. Throughout my career, I have demonstrated
        strong Html,Css,JS,React. I am a proactive problem solver and enjoy
        taking on new challenges to expand my skill set. I work well both
        independently and collaboratively, and I am always eager to learn from
        others.
      </div>
    </div>
  );
};
