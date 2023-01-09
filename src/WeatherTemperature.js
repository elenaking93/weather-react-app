import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="today-temperature">
        <span id="current-temperature">{Math.round(props.celsius)}</span>
        <a href="/" id="celcium-temp">
          °C
        </a>{" "}
        |
        <a href="/" id="farenheit-temp" onClick={showFahrenheit}>
          {}°F
        </a>
      </div>
    );
  } else {
    return (
      <div className="today-temperature">
        <span id="current-temperature">{Math.round(convertFahrenheit())}</span>
        <a href="/" id="celcium-temp" onClick={showCelsius}>
          °C
        </a>{" "}
        |
        <a href="/" id="farenheit-temp">
          °F
        </a>
      </div>
    );
  }
}
