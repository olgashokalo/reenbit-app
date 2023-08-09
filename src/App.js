import "./App.css";
import React, { useState } from "react";
import Trips from "./Trips";
import Card from "./Card";
import "./Card.css";
import WeatherToday from "./WeatherToday";
import WeatherForecast from "./WeatherForecast";

export default function App(props) {
  const [trips, setTrips] = useState([{ city: "Berlin", date: "08.08.2023" }]);
  return (
    <>
      <div className="App grid">
        <div className="LeftSide ">
          <h2>
            {" "}
            <span className="App--Description">Weather </span> Forecast
          </h2>
          <Trips />
          <ul>
            {trips.map(function (trip, id) {
              return <Card city={trip.city} date={trip.date} key={id} />;
            })}
          </ul>
          <WeatherForecast />
        </div>
        <div className="RightSide">
          <WeatherToday defaultCity="Berlin" info={setTrips} />
        </div>
      </div>
    </>
  );
}
