import React from "react";

export default function WeatherForecastDay(props) {
  console.log(props.data);
  function day() {
    let date = new Date(props.data[0].dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="col-12 col-md day day1">
      <div className="card day-section">
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <div className="weekday">{day()}</div>
              <div className="cloudness">{props.data[0].weather[0].main}</div>
              <div className="temperature-days5" id="weather-future-max">
                {Math.round(props.data[0].temp.max)}°C
                <span id="weather-future-min" className="m-2">
                  {Math.round(props.data[0].temp.min)}°C
                </span>
              </div>
            </div>
            <div className="col-4 day5-image">
              <img
                src={`http://openweathermap.org/img/wn/${props.data[0].weather[0].icon}@2x.png`}
                alt={props.data[0].weather[0].description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
