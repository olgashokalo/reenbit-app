import React from "react";
import axios from "axios";

export default function Weather() {
  function showWeather(response) {
    console.log(response.data.days[0].temp);
  }
  const apiKey = "SDTHMTWESYKMGM942D2WJ5VV3";
  let apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Paris/today?unitGroup=metric&include=days&key=${apiKey}&contentType=json`;
  axios.get(apiUrl).then(showWeather);

  return <h1>He</h1>;
}
