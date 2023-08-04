import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    snow: "SNOW",
    "snow-showers-day": "SNOW",
    "snow-showers-night": "SNOW",
    rain: "RAIN",
    "thunder-rain": "RAIN",
    "thunder-showers-day": "RAIN",
    "thunder-showers-night": "RAIN",
    "showers-day": "RAIN",
    "showers-night": "RAIN",
    fog: "FOG",
    wind: "WIND",
    cloudy: "CLOUDY",
    "partly-cloudy-day": "PARTLY_CLOUDY_DAY",
    "partly-cloudy-night": "PARTLY_CLOUDY_NIGHT",
    "clear-day": "CLEAR_DAY",
    "clear-night": "CLEAR_NIGHT",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="white"
      size={60}
      animate={true}
    />
  );
}
