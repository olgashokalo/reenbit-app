import React from "react";
import "./WeatherToday.css";
// import axios from "axios";

export default function WeatherToday() {
  // function showWeather(response) {
  //   console.log(response.data.days[0].temp);
  // }
  // const apiKey = "SDTHMTWESYKMGM942D2WJ5VV3";
  // let apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Paris/today?unitGroup=metric&include=days&key=${apiKey}&contentType=json`;
  // axios.get(apiUrl).then(showWeather);
  return (
    <div className="WeatherToday">
      <ul className="WeatherToday--Description">
        <li className="WeatherToday--Day">Sunday</li>
        <li className="WeatherToday--Temperature">
          {" "}
          <img
            className="WeatherToday--Icon"
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="weather-icon"
          />
          <span className="WeatherToday-CurrentTemperature"></span>24
          <span className="WeatherToday__Units"> ° C</span>
        </li>
        <li className="WeatherToday--City"> Berlin</li>
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
}
