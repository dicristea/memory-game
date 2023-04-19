import React from "react";
import pic from "../assets/GitHub-Mark-64px.png";

const Card = ({ incrementIncrease }) => {
  return (
    <div className="card">
      <button onClick={incrementIncrease}>
        <img src={pic} alt="" />
      </button>
    </div>
  );
};

export default Card;
