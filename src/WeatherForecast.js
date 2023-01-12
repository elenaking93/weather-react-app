import React from "react";

export default function WeatherForecast() {
  return (
    <div class="col-12 col-md day day1">
      <div class="card day-section">
        <div class="card-body">
          <div class="row">
            <div class="col-8">
              <div class="weekday">Thu</div>
              <div class="cloudness"></div>
              <div class="temperature-days5" id="weather-future-max">
                <span id="weather-future-min"></span>
              </div>
            </div>
            <div class="col-4 day5-image">
              <img src="" alt="" width="60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
