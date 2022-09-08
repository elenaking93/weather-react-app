import "./App.css";
import TodayForecast from "./TodayForecast";
import Search from "./Search";

function App() {
  let currentData = {
    city: "Kyiv",
    date: "20 Aug 2022",
  };
  return (
    <div className="App">
      <div className="container">
        <div className="navwrapper">
          <div className="city-date">
            <h1 className="main-city">{currentData.city}</h1>
            <h2 className="current-datetime">{currentData.date}</h2>
          </div>
          <Search />
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <TodayForecast />
          </div>
        </div>
        <div className="future-forecast">
          <p>5-day forecast</p>
        </div>
        <div className="weather-forecast" id="forecast"></div>
        <div className="creator">
          <p>
            <a
              href="https://github.com/elenaking93/weather-react-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Elena Korol
          </p>
        </div>
      </div>
      <script src="javascript.js"></script>
    </div>
  );
}

export default App;
