import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import SchoolIcon from "@mui/icons-material/School";
import timelineElements from "./TimelineElements";
import WorkIcon from "@mui/icons-material/Work";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function Eductaion() {
  const isMobile = window.innerWidth >= 918;
  let workIconStyles = { background: "rgb(15, 44, 68)" };
  let schoolIconStyles = { background: "rgb(15, 44, 68)" };

  return (
    <div className="educationdiv">
      <VerticalTimeline
        style={{ width: "60px" }}
        layout={isMobile ? "2-columns" : "1-column-left"}
      >
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              className="timelinecard"
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Eductaion;
