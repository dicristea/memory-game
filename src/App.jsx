// import logo from "./assets/logo.svg";
import React, { useEffect, useState } from "react";

import "./styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posters from "./components/Posters";

import fetchBestScore from "./utils/GetBestScore";

const App = () => {
  const [count, setCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const updateGameStatus = () => {
    setGameOver(true);
  };

  const resetGame = () => {
    let bestScore = fetchBestScore("Best Score");
    if (count > bestScore) {
      setBestScore(count);
    }
    setCount(0);
    setGameOver(false);
  };

  console.log(fetchBestScore());

  useEffect(() => {
    localStorage.setItem("Best Score", JSON.stringify(count));
  }, [count]);

  // console.log(count);
  return (
    <div className="App-bg">
      <div className="App">
        <Header count={count} bestScore={bestScore} />
        {gameOver && (
          <div className="resetPopup">
            "You've selected that poster already."
            <button className="resetBtn" onClick={resetGame}>
              Try Again?
            </button>
          </div>
        )}
        <Posters onClick={incrementCount} updateGameStatus={updateGameStatus} />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
