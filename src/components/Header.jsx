import React from "react";
import "../styles/Header.css";
import marines from "../assets/MarineLogo.webp";

const Header = ({ count }) => {
  return (
    <div className="header">
      <img className="marines" src={marines} alt="" />
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="horizontal" />
        <h2 style={{ margin: "0 15px" }}>Job Board: Wanted Pirates</h2>
        <div className="horizontal" />
      </div>
      <h4>
        This is a memory game! Get points by clicking on a poster but don't
        click on any more than once!
      </h4>
      <div className="scoreboard">
        <div className="current-score">Current Score</div>
        <div className="vertical"></div>
        <div className="best-score">Best Score</div>
      </div>
    </div>
  );
};

export default Header;
