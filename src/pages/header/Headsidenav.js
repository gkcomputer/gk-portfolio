import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{ backgroundColor: "rgb(15,44,68)" }}
    >
      <Box
        sx={{
          width: 200,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <a
          href="#home"
          style={{ color: "rgb(8,102,127)", textDecoration: "none" }}
        >
          Home
        </a>
        <a
          href="#about"
          style={{ color: "rgb(8,102,127)", textDecoration: "none" }}
        >
          About
        </a>
        <a
          href="#education"
          style={{ color: "rgb(8,102,127)", textDecoration: "none" }}
        >
          Education
        </a>
        <a
          href="#skills"
          style={{ color: "rgb(8,102,127)", textDecoration: "none" }}
        >
          Skills
        </a>
        <a
          href="#projects"
          style={{ color: "rgb(8,102,127)", textDecoration: "none" }}
        >
          Projects
        </a>
        <a
          href="#contact"
          style={{ color: "rgb(8,102,127)", textDecoration: "none" }}
        >
          Contact
        </a>
      </Box>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>
        <div className={props.style}>
          <div
            style={{
              width: "30px",
              height: "3px",
              background: "white",
              margin: "6px",
            }}
          ></div>
          <div
            style={{
              width: "30px",
              height: "3px",
              background: "white",
              margin: "6px",
            }}
          ></div>
          <div
            style={{
              width: "30px",
              height: "3px",
              background: "white",
              margin: "6px",
            }}
          ></div>
        </div>
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
