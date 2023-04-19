// import logo from "./assets/logo.svg";
import React, { useState } from "react";

import "./styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App-bg">
      <div className="App">
        <Header count={count} />
        <div className="card-holder">
          <Card incrementCount={incrementCount}></Card>
          <Card incrementCount={incrementCount}></Card>
          <Card incrementCount={incrementCount}></Card>
          <Card incrementCount={incrementCount}></Card>
          <Card incrementCount={incrementCount}></Card>
          <Card incrementCount={incrementCount}></Card>
          <Card incrementCount={incrementCount}></Card>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
