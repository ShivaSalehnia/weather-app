import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function MaxTemprature() {
    let max = Math.round(props.data.temp.max);

    return `${max}°`;
  }

  function MinTemprature() {
    let min = Math.round(props.data.temp.min);

    return `${min}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForcast-Day">{day()}</div>
      <WeatherIcon data={props.data.weather[0].icon} size={36} />
      <div className="MaxMinTempDay">
        <div className="MaxDay">{MaxTemprature()}</div>
        <div className="MinDay">{MinTemprature()}</div>
      </div>
    </div>
  );
}
