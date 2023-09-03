import React, { useState } from "react";
import "./WeatherUnit.css";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <strong>Temprature: </strong>
        {props.celsius} ℃ |{" "}
        <a href="/" onClick={showFahrenheit} className="unitLink">
          ℉
        </a>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <strong>Temprature: </strong>
        {Math.round(fahrenheit)}{" "}
        <a href="/" onClick={showCelsius} className="unitLink">
          ℃{" "}
        </a>
        | ℉
      </span>
    );
  }
}
