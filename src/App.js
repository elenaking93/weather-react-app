import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather">
          <Weather defaultCity="Kyiv" />
        </div>
        <div className="creator">
          <p>
            <a
              href="https://github.com/elenaking93/weather-react-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            {""} by Elena Korol
          </p>
        </div>
      </div>
    </div>
  );
}
