import { useRef, useEffect } from "react";
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
        I am a highly motivated and dedicated professional with a genuine
        passion for application development. With 3.5 years of experience in the
        IT field, I have cultivated a robust understanding of frontend
        technologies. I am committed to consistently delivering exceptional
        results and excel in fast-paced, challenging environments. Throughout my
        career, I have consistently demonstrated proficiency in HTML, CSS,
        JavaScript, and React. I am a proactive problem solver who relishes
        tackling new challenges to expand my skill set. I thrive in both
        independent and collaborative work settings, and I am always
        enthusiastic about learning from others.
      </div>
    </div>
  );
};
