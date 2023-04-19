import React from "react";
import pic from "../assets/GitHub-Mark-64px.png";

const Card = ({ incrementCount }) => {
  return (
    <div className="card">
      <button onClick={incrementCount}>
        <img src={pic} alt="" />
      </button>
    </div>
  );
};

export default Card;
