import "./App.css";
import Trips from "./Trips";
import Card from "./Card";
import WeatherToday from "./WeatherToday";

export default function App() {
  return (
    <>
      <div className="App grid">
        <div className="LeftSide ">
          <h2>Weather Forecast</h2>
          <Trips />
          <Card />
        </div>
        <div className="RightSide">
          <WeatherToday defaultCity="Berlin" />
        </div>
      </div>
    </>
  );
}
