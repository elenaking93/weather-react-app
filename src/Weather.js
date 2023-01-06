import React, { useState } from "react";
import "./App.css";
import TodayForecast from "./TodayForecast";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperatureCelsius: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      skyState: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconURL: "",
    });
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="navwrapper">
          <div className="city-date">
            <h1 className="main-city">{weatherData.city}</h1>
            <FormattedDate date={weatherData.date} />
          </div>
          <div className="search">
            <form className="search-city">
              <input type="text" placeholder="Search city" id="search-city" />
              <input
                className="search-button"
                type="submit"
                value="Let's go!"
              />
            </form>
            <button className="current-location-button">
              Current location
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <TodayForecast data={weatherData} />
          </div>
        </div>
        <div className="future-forecast">
          <p>5-day forecast</p>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
    );
  } else {
    let apiKey = "548840c634f3a0cc99d8d8ba9e5b649d";
    let city = "London";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
