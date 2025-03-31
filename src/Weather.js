import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.city} is ${response.data.temperature.current}°C`
    );
  }

  let apiKey = "8o2ff7498032b5ae4f9bt64daad694e7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="weatherReturn">
      <h1>Hello weather</h1>
      <Loader type="Puff" color="#00BFFF" height={80} width={80} />
    </div>
  );
}
