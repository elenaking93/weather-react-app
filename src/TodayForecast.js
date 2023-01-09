import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function TodayForecast(props) {
  return (
    <div className="card main-block">
      <div className="card-body">
        <div className="row today-weather">
          <div className="col-4">
            <div className="today">Today</div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-4 today-image">
            <img
              src={props.data.icon}
              alt={props.data.description}
              id="today-icon"
            />
          </div>
          <div className="col-4">
            <div className="sky-state text-capitalize">
              {props.data.skyState}
            </div>
            <div className="humidity">Humidity {props.data.humidity}%</div>
            <div className="wind">Wind {props.data.wind} m/s</div>
          </div>
        </div>
      </div>
    </div>
  );
}
