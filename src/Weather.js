import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="WeatherEverywhere">
      <h1>Weather Everywhere</h1>
      <h2>Check Every City's Weather Before Travelling</h2>
      <h4>Curious about the weather of ... </h4>
      <form>
        <div className="row">
          <div className="col-md-9">
            <input type="search" placeholder="Search City" />
          </div>
          <div className="col-md-3">
            <input type="submit" value="Find" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-icon"
          />
        </div>
        <div className="col-md-6">
          <h4>Tehran</h4>
          <h5>Now</h5>
          <ul>
            <li>Temprature: 38 ℃</li>
            <li>Humidity: 20 %</li>
            <li>Wind: 4 km/h</li>
            <li>Description: Partly Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
