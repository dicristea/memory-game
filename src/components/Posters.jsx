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

const Posters = ({ onClick, updateGameStatus }) => {
  let unshuffled = [
    <Card
      key={0}
      name={Zoro}
      onClick={onClick}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={1}
      name={Nami}
      onClick={onClick}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={2}
      name={Usopp}
      onClick={onClick}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={3}
      name={Sanji}
      onClick={onClick}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={4}
      name={Luffy}
      onClick={onClick}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={5}
      name={Robin}
      onClick={onClick}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={6}
      name={Brook}
      onClick={onClick}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={7}
      name={Franky}
      onClick={onClick}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={8}
      name={Jinbe}
      onClick={onClick}
      updateGameStatus={updateGameStatus}
    />,
    <Card
      key={9}
      name={Chopper}
      onClick={onClick}
      updateGameStatus={updateGameStatus}
    />,
  ];

  const shuffle = () => {
    let shuffled = unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  };

  return <div className="card-holder">{shuffle()}</div>;
};

export default Posters;
