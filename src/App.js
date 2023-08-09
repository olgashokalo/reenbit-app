import "./App.css";
import React, { useState } from "react";
import Trips from "./Trips";
import Card from "./Card";
import WeatherToday from "./WeatherToday";
import Modal from "./Modal";

export default function App(props) {
  const [trips, setTrips] = useState([{ city: "Berlin", date: "08.08.2023" }]);
  return (
    <>
      <div className="App grid">
        <div className="LeftSide ">
          <h2>Weather Forecast</h2>
          <Trips />
          <ul>
            {trips.map(function (trip, id) {
              return <Card city={trip.city} date={trip.date} key={id} />;
            })}
          </ul>
          <div className="card--container">
            <div className="addTripButton">
              <Modal info={setTrips} />
            </div>
          </div>
        </div>
        <div className="RightSide">
          <WeatherToday defaultCity="Berlin" />
        </div>
      </div>
    </>
  );
}
