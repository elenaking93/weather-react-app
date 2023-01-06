import React from "react";

export default function TodayForecast(props) {
  return (
    <div className="card main-block">
      <div className="card-body">
        <div className="row today-weather">
          <div className="col-4">
            <div className="today">Today</div>
            <div className="today-temperature">
              <span id="current-temperature"></span>
              <a href="/" id="celcium-temp" className="active">
                {props.data.temperatureCelsius}°C
              </a>{" "}
              |
              <a href="/" id="farenheit-temp">
                {props.data.temperatureCelsius}°F
              </a>
            </div>
          </div>
          <div className="col-4 today-image">
            <img src={props.data.iconURL} alt="" id="today-icon" />
          </div>
          <div className="col-4">
            <div className="sky-state text-capitalize">
              {props.data.skyState}
            </div>
            <div className="humidity">{props.data.humidity}%</div>
            <div className="wind">{props.data.wind} m/s</div>
          </div>
        </div>
      </div>
    </div>
  );
}
