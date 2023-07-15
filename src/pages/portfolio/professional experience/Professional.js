import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "./Professional.css";
import SchoolIcon from "@mui/icons-material/School";
import protimelineElements from "./TimelineElements";
import WorkIcon from "@mui/icons-material/Work";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function Professional() {
  let workIconStyles = { background: "rgb(15, 44, 68)" };
  let schoolIconStyles = { background: "rgb(15, 44, 68)" };
  return (
    <div className="portfolio">
      <VerticalTimeline>
        {protimelineElements.map((element) => {
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

export default Professional;

const styles = {
  line: { width: "60%" },
};
