import "./About.css";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export const About = () => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  return (
    <div id="about" className="aboutdiv">
      <div ref={ref}>
        {entry?.isIntersecting && (
          <div className="aboutText">
            <h1>ABOUT</h1>
          </div>
        )}
      </div>

      <div ref={ref}>
        {entry?.isIntersecting && (
          <div className="paragraph">
            I am a highly motivated and dedicated professional with a passion
            for Developing Applications. With 3.5 years of experience in IT
            feild, I possess a solid understanding of Frontend technologies. I
            am committed to delivering exceptional results and thrive in
            fast-paced and challenging environments. Throughout my career, I
            have demonstrated strong Html,Css,JS,React. I am a proactive problem
            solver and enjoy taking on new challenges to expand my skill set. I
            work well both independently and collaboratively, and I am always
            eager to learn from others.
          </div>
        )}
      </div>
    </div>
  );
};
