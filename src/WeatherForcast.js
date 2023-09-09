import React from "react";
import "./WeatherForcast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForcast() {
  return (
    <div className="WeatherForcast container">
      <div className="row">
        <div className="col-md-2 neateCol">
          <div className="WeatherForcast-Day">Sunday</div>
          <WeatherIcon data="01d" size={36} />
          <div className="MaxMinTempDay">
            <div className="MaxDay">23° </div>
            <div className="MinDay">12° </div>
          </div>
        </div>
      </div>
    </div>
  );
}
