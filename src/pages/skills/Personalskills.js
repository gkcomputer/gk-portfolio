import React, { useEffect } from "react";
import "./Personalskills.css";
import { CircularProgress } from "@mui/material";

function Personalskills() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        return newProgress >= 80 ? 80 : newProgress;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="circularprogress">
      <CircularProgress variant="determinate" value={progress} size="100px" />
    </div>
  );
}

export default Personalskills;

{
  /* <div className="personalskillscontainer">
        <div className="circular-progress">
          <span className="progress-value">0%</span>
        </div>
      </div>
      <script src="../src/pages/skills/skillsscript.js"></script> */
}
