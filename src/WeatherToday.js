import React, { useState } from "react";
import axios from "axios";
import "./WeatherToday.css";

export default function WeatherToday(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function showWeather(response) {
    console.log(response);
    setWeatherData({
      temperature: response.data.days[0].temp,
      city: response.data.address,
      date: "Sunday",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.days[0].conditions,
    });

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherToday">
        <ul className="WeatherToday--Description">
          <li className="WeatherToday--Day">{weatherData.date}</li>
          <li className="WeatherToday--Temperature">
            {" "}
            <img
              className="WeatherToday--Icon"
              src={weatherData.iconUrl}
              alt={weatherData.description}
            />
            <span className="WeatherToday-CurrentTemperature"></span>
            {Math.round(weatherData.temperature)}
            <span className="WeatherToday__Units"> ° C</span>
          </li>
          <li className="WeatherToday--City"> {weatherData.city}</li>
        </ul>

        <ul className="WeatherToday--Date">
          <li>
            {" "}
            <span className="WeatherToday__Days">30 </span> <br />
            DAYS
          </li>
          <li>
            {" "}
            <span className="WeatherToday__Hours"> 15 </span>
            <br />
            HOURS
          </li>
          <li>
            <span className="WeatherToday__Minutes"> 15</span>
            <br />
            MINUTES
          </li>
          <li>
            <span className="WeatherToday__Seconds">30 </span> <br />
            SECONDS
          </li>
        </ul>
      </div>
    );
  } else {
    const apiKey = "SDTHMTWESYKMGM942D2WJ5VV3";

    let apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${props.defaultCity}/today?unitGroup=metric&include=days&key=${apiKey}&contentType=json`;
    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
