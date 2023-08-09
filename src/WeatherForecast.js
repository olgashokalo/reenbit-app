import React, { useState } from "react";

import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);

    return (
      <>
        <p className="WeatherForecast--Week">Week</p>

        {forecast.days.map(function (dailyForecast, index) {
          if (index < 7) {
            return (
              <div className="WeatherForecastDay" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </>
    );
  } else {
    const apiKey = "THXGMMHC5CEQHDUKLJ2PK3XPF";
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${props.defaultCity}?key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
