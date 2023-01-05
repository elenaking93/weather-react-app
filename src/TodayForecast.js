import React, { useState } from "react";
import axios from "axios";

export default function TodayForecast() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperatureCelsius: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Thursday 10:00",
      skyState: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconURL: "",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="card main-block">
        <div className="card-body">
          <div className="row today-weather">
            <div className="col-4">
              <div className="today">Today</div>
              <div className="today-temperature">
                <span id="current-temperature"></span>
                <a href="/" id="celcium-temp" className="active">
                  {weatherData.temperatureCelsius}°C
                </a>{" "}
                |
                <a href="/" id="farenheit-temp">
                  {weatherData.temperatureCelsius}°F
                </a>
              </div>
            </div>
            <div className="col-4 today-image">
              <img src="" alt="" id="today-icon" />
            </div>
            <div className="col-4">
              <div className="sky-state text-capitalize">
                {weatherData.skyState}
              </div>
              <div className="humidity">{weatherData.humidity}%</div>
              <div className="wind">{weatherData.wind} m/s</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "548840c634f3a0cc99d8d8ba9e5b649d";
    let city = "Kyiv";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }
}
