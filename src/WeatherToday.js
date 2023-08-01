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
      <ul>
        <li>Sunday</li>
        <li> 24 C</li>
        <li> Berlin</li>
      </ul>

      <ul className="WeatherToday--Date">
        <li>30 days</li>
        <li>15 hours</li>
        <li>15 minutes</li>
        <li>30 seconds</li>
      </ul>
    </div>
  );
}
