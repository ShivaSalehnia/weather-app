import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="WeatherEverywhere">
      <h1>Weather Everywhere</h1>
      <h2>Check Every City's Weather Before Travelling</h2>

      <div className="SearchSection">
        <h4>Curious about the weather of ... </h4>
        <form>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                className="form-control w-100"
                placeholder="Search City"
              />
            </div>
            <div className="col-sm-3">
              <input
                type="submit"
                value="Find"
                className="btn btn-warning m-0"
              />
            </div>
          </div>
        </form>
        <div className="row CityTemp d-flex justify-content-center">
          <div className="col-sm-6 p-0 w-80">
            <h4 className="City">Tehran</h4>
          </div>

          <div className="col-sm-6 p-0 w-80">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather-icon"
              className="img-fluid"
            />
          </div>
        </div>
        <ul className="WeatherState">
          <li>
            <strong>Temprature:</strong> 38 ℃{" "}
          </li>
          <li>
            <strong>Humidity:</strong> 20 %
          </li>
          <li>
            <strong>Wind:</strong> 4 km/h
          </li>
          <li>
            <strong>Description:</strong> Partly Cloudy
          </li>
        </ul>
      </div>
    </div>
  );
}
