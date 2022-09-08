import React from "react";

export default function TodayForecast() {
  let weatherData = {
    temperatureCelcius: 25,
    temperatureFarenheit: 76,
    skyState: "Sunny",
    humidity: 80,
    wind: 5,
  };
  return (
    <div className="card main-block">
      <div className="card-body">
        <div className="row today-weather">
          <div className="col-4">
            <div className="today">Today</div>
            <div className="today-temperature">
              <span id="current-temperature"></span>
              <a href="/" id="celcium-temp" className="active">
                {weatherData.temperatureCelcius}°C
              </a>{" "}
              |
              <a href="/" id="farenheit-temp">
                {weatherData.temperatureFarenheit}°F
              </a>
            </div>
          </div>
          <div className="col-4 today-image">
            <img src="" alt="" id="today-icon" />
          </div>
          <div className="col-4">
            <div className="sky-state">{weatherData.skyState}</div>
            <div className="humidity">{weatherData.humidity}%</div>
            <div className="wind">{weatherData.wind} m/s</div>
          </div>
        </div>
      </div>
    </div>
  );
}
