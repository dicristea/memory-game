import React from "react";
import "../styles/Header.css";
import marinesLogo from "../assets/MarineLogo.webp";
import worldGovLogo from "../assets/world-gov-logo.webp";

const Header = ({ count }) => {
  return (
    <div className="header">
      <div className="top-header">
        <img className="marines" src={marinesLogo} alt="Logo of the Marines." />
        <div className="scoreboard">
          <h3 className="current-score">Score {count} </h3>
          <div className="vertical"></div>
          <h3 className="best-score">Best Score</h3>
        </div>
      </div>
      <div className="title">
        <div className="horizontal" />
        <h1 style={{ margin: "0 15px" }}>Job Board: Wanted Pirates</h1>
        <div className="horizontal" />
      </div>
      <div className="description">
        <img src={worldGovLogo} alt="Logo of the World Government." />
        <div>
          <p>This is a memory game!</p>
          <p>
            Get points by clicking on a poster but don't click on any more than
            once!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
