import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="card day-section">
      <div className="card-body">
        <div className="row">
          <div className="col-7">
            <div className="weekday">{day()}</div>
            <div className="cloudness">{props.data.weather[0].main}</div>
            <div className="temperature-days5" id="weather-future-max">
              {Math.round(props.data.temp.max)}°C
              <span id="weather-future-min" className="m-2">
                {Math.round(props.data.temp.min)}°C
              </span>
            </div>
          </div>
          <div className="col-5 day5-image">
            <img
              src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              alt={props.data.weather[0].description}
              width="60"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
