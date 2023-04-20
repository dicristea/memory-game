import React from "react";
import "../styles/Card.css";
// import pic from "../assets/GitHub-Mark-64px.png";

const Card = ({ name, incrementCount }) => {
  return (
    <div className="card">
      <button onClick={incrementCount}>
        <img src={name} alt="" />
      </button>
    </div>
  );
};

export default Card;
