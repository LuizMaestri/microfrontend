import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="react logo" className="App-logo" />
        <h1>Counter: {counter}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </header>
    </div>
  );
}

export default App;
