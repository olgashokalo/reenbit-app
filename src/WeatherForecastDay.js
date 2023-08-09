import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.datetimeEpoch * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return days[day];
  }

  return (
    <div className="WeatherContent">
      <div className="WeatherForecast--Day">{day()} </div>
      <div className="WeatherForecast--Icon">
        {" "}
        <WeatherIcon code={props.data.icon} color="black" size={50} />{" "}
      </div>
      <div className="WeatherForecast--Temperatures">
        {" "}
        <span className="WeatherForecast--TemperatureMax">
          {Math.round(((props.data.tempmax - 32) * 5) / 9)}°
        </span>
        <span className="WeatherForecast--TemperatureMin">
          /{Math.round(((props.data.tempmin - 32) * 5) / 9)}°
        </span>
      </div>
    </div>
  );
}
