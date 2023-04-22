import React, { useEffect, useState } from "react";

import "./styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posters from "./components/Posters";

import fetchBestScore from "./utils/GetBestScore";
import PostersArray from "./utils/PostersArray";

const App = () => {
  const [count, setCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);
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

  const resetScore = () => {
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

  const resetGame = () => {
    setWinner(!winner);
    window.localStorage.clear();
    window.location.reload(false);
  };

  useEffect(() => {
    let posters = PostersArray();
    if (count === posters.length) {
      setWinner(true);
    }
  }, [count]);

  return (
    <div className="App-bg">
      <div className="App">
        <Header count={count} bestScore={bestScore} resetGame={resetGame} />
        <Posters
          onClick={incrementCount}
          gameOver={gameOver}
          resetScore={resetScore}
          winner={winner}
          updateGameStatus={updateGameStatus}
        />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
