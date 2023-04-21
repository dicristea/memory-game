import React, { useEffect, useState } from "react";
import "../styles/Card.css";

const Card = ({ name, onClick, updateGameStatus }) => {
  const [selected, setSelected] = useState(false);

  const onSelect = () => {
    if (!selected) {
      onClick();
      setSelected(true);
    }

    if (selected) {
      updateGameStatus();
    }
  };

  const resetSelectionStatus = () => {
    setSelected(false);
  };

  return (
    <div className="card">
      <button onClick={onSelect}>
        {selected}
        <img src={name} alt={`One Piece Wanted Poster for ${name}.`} />
      </button>
    </div>
  );
};

export default Card;
