// import logo from "./assets/logo.svg";
import React, { useState } from "react";

import "./styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";

import Zoro from "./assets/Posters/Roronoa_Zoro.png";
import Nami from "./assets/Posters/Nami.png";
import Usopp from "./assets/Posters/God_Usopp.png";
import Sanji from "./assets/Posters/Sanji.png";
import Luffy from "./assets/Posters/Monkey_D._Luffy.png";
import Robin from "./assets/Posters/Nico_Robin.png";
import Brook from "./assets/Posters/Brook.png";
import Franky from "./assets/Posters/Franky.png";
import Jinbe from "./assets/Posters/Jinbe.jpg";
import Chopper from "./assets/Posters/Tony_Tony_Chopper.png";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  console.log(count);
  return (
    <div className="App-bg">
      <div className="App">
        <Header count={count} />
        <div className="card-holder">
          <Card name={Zoro} incrementCount={incrementCount}></Card>
          <Card name={Nami} incrementCount={incrementCount}></Card>
          <Card name={Usopp} incrementCount={incrementCount}></Card>
          <Card name={Sanji} incrementCount={incrementCount}></Card>
          <Card name={Luffy} incrementCount={incrementCount}></Card>
          <Card name={Robin} incrementCount={incrementCount}></Card>
          <Card name={Brook} incrementCount={incrementCount}></Card>
          <Card name={Franky} incrementCount={incrementCount}></Card>
          <Card name={Jinbe} incrementCount={incrementCount}></Card>
          <Card name={Chopper} incrementCount={incrementCount}></Card>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
