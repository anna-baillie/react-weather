import "./App.css";
import React from "react";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <Weather city="New York" />
      </header>
    </div>
  );
}

export default App;
