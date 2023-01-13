import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "metric";
    let apiKey = "548840c634f3a0cc99d8d8ba9e5b649d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col-12 col-md day day1" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    load();
    return null;
  }
}
