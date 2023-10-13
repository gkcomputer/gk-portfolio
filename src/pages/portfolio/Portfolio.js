import React, { useState } from "react";
import "./Portfolio.css";
import Eductaion from "./education/Education";
import Professional from "./experience/Experience";
import { NavLink } from "react-router-dom";
import Experience from "./experience/Experience";

function Portfolio() {
  const [education, setEducation] = useState(true);
  const [professional, setProfessional] = useState(false);
  return (
    <div id="portfolio" className="portdiv">
      <div className="selecthead">
        <p
          onClick={() => {
            setEducation(true);
            setProfessional(false);
          }}
        >
          Education
        </p>
        <p
          onClick={() => {
            setProfessional(true);
            setEducation(false);
          }}
        >
          Experience
        </p>
      </div>
      {education ? <Eductaion /> : null}
      {professional ? <Experience /> : null}
    </div>
  );
}

export default Portfolio;
