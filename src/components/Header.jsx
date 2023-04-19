import React from "react";
import "../styles/Header.css";

const Header = ({ count }) => {
  return (
    <div className="header">
      <h2>This is a memory game.</h2>
      <div className="scoreboard">
        <div className="current-score">Current Score</div>
        <div className="vertical"></div>
        <div className="best-score">Best Score</div>
      </div>
    </div>
  );
};

export default Header;
