import React from "react";
import Card from "./Card";

import "../styles/Card.css";
import Zoro from "../assets/Posters/Roronoa_Zoro.png";
import Nami from "../assets/Posters/Nami.png";
import Usopp from "../assets/Posters/God_Usopp.png";
import Sanji from "../assets/Posters/Sanji.png";
import Luffy from "../assets/Posters/Monkey_D._Luffy.png";
import Robin from "../assets/Posters/Nico_Robin.png";
import Brook from "../assets/Posters/Brook.png";
import Franky from "../assets/Posters/Franky.png";
import Jinbe from "../assets/Posters/Jinbe.jpg";
import Chopper from "../assets/Posters/Tony_Tony_Chopper.png";
import Law from "../assets/Posters/Law.png";
import Blackbeard from "../assets/Posters/Blackbeard.png";
import BigMom from "../assets/Posters/BigMom.png";
import Shanks from "../assets/Posters/Shanks.png";

const Posters = ({ onClick, gameOver, updateGameStatus, resetGame }) => {
  let unshuffled = [
    <Card
      key={0}
      name={Zoro}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={1}
      name={Nami}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={2}
      name={Usopp}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={3}
      name={Sanji}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={4}
      name={Luffy}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={5}
      name={Robin}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={6}
      name={Brook}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={7}
      name={Franky}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={8}
      name={Jinbe}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={9}
      name={Chopper}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={10}
      name={Law}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={11}
      name={Blackbeard}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={12}
      name={BigMom}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={13}
      name={Shanks}
      onClick={onClick}
      gameOver={gameOver}
      updateGameStatus={updateGameStatus}
    />,
  ];

  // Randomly shuffle an array using Math.random()
  const shuffle = () => {
    let shuffled = unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  };

  return (
    <>
      <div className="card-holder">
        {gameOver && (
          <div className="reset-popup">
            <div className="reset-message">
              You've selected that poster already.
              <button className="resetBtn" onClick={() => resetGame()}>
                Try Again?
              </button>
            </div>
          </div>
        )}
        {shuffle()}
      </div>
    </>
  );
};

export default Posters;
