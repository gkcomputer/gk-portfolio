import React, { useState } from "react";
import "./Portfolio.css";
import Eductaion from "./education/Education";
import Professional from "./professional experience/Professional";
import { NavLink } from "react-router-dom";

function Portfolio() {
  const [education, setEducation] = useState(true);
  const [professional, setProfessional] = useState(false);
  return (
    <div id="education" className="portdiv">
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
      {professional ? <Professional /> : null}
    </div>
  );
}

export default Portfolio;
