import React from "react";
import "./Headsidenav.css";
import { useDispatch, useSelector } from "react-redux";
import { sidenav } from "../../store/actions/Headsidenav.action";

function Headsidenav() {
  const data = useSelector((state) => state.sidebar.status);
  const dispatch = useDispatch();

  return data ? (
    <div className="sideDiv">
      <div
        className="backdrop"
        onClick={() => {
          dispatch(sidenav());
        }}
      >
        <div className="sideMenu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  ) : null;
}

export default Headsidenav;
