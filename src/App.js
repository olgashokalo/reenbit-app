import "./App.css";
import Trips from "./Trips";
import WeatherToday from "./WeatherToday";

export default function App() {
  return (
    <>
      <div className="App grid">
        <div className="LeftSide ">
          <h2>Weather Forecast</h2>
          <Trips />
        </div>
        <div className="RightSide">
          <WeatherToday defaultCity="Berlin" />
        </div>
      </div>
    </>
  );
}
