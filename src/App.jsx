// import logo from "./assets/logo.svg";
import React, { useState } from "react";

import "./styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posters from "./components/Posters";

import fetchBestScore from "./utils/GetBestScore";

const App = () => {
  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [bestScore, setBestScore] = useState(() => {
    const storedScore = localStorage.getItem("Best Score");
    const initialValue = JSON.parse(storedScore);
    return initialValue || 0;
  });

  const incrementCount = () => {
    setCount(count + 1);
  };

  const updateGameStatus = () => {
    setGameOver(!gameOver);
  };

  const resetGame = () => {
    let storedScore = fetchBestScore("Best Score");

    if (count > storedScore) {
      setBestScore(count);
      localStorage.setItem("Best Score", JSON.stringify(count));
    } else {
      setBestScore(storedScore);
    }
    setCount(0);
    updateGameStatus();
  };

  return (
    <div className="App-bg">
      <div className="App">
        <Header count={count} bestScore={bestScore} />
        <Posters
          onClick={incrementCount}
          gameOver={gameOver}
          resetGame={resetGame}
          updateGameStatus={updateGameStatus}
        />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
