import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let units = "metric";
  let apiKey = "548840c634f3a0cc99d8d8ba9e5b649d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="col-12 col-md day day1">
      <div className="card day-section">
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <div className="weekday">Thu</div>
              <div className="cloudness"></div>
              <div className="temperature-days5" id="weather-future-max">
                <span id="weather-future-min"></span>
              </div>
            </div>
            <div className="col-4 day5-image">
              <img src="" alt="" width="60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
