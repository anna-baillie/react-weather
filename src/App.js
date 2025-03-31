import "./App.css";
import React from "react";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <h5>
        This app was created by{" "}
        <a href="https://github.com/anna-baillie">Anna Baillie</a> on{" "}
        <a href="https://github.com/anna-baillie/react-weather">GitHub</a>
      </h5>
    </div>
  );
}
