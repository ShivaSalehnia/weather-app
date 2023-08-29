import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  let [Weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,
      name: response.data.name,
      temprature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      Wind: Math.round(response.data.wind.speed),
      Description: response.data.weather[0].description,
      Icon: response.data.weather[0].icon,
    });
  }

  if (Weather.ready) {
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
              <h4 className="City">{Weather.name}</h4>
            </div>

            <div className="col-sm-6 p-0 ">
              <img
                src={`https://openweathermap.org/img/wn/${Weather.Icon}@2x.png`}
                alt={Weather.Description}
                className="img-fluid"
              />
            </div>
          </div>
          <ul className="WeatherState">
            <li>
              <strong>Temprature:</strong> {Weather.temprature} ℃{" "}
            </li>
            <li>
              <strong>Humidity:</strong> {Weather.humidity} %
            </li>
            <li>
              <strong>Wind:</strong> {Weather.Wind} km/h
            </li>
            <li>
              <strong>Description:</strong>{" "}
              <span className="text-capitalize">{Weather.Description}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=f3009e4852fa0a079dab291dabf020c4&units=metric`;
    axios.get(url).then(handleResponse);
    return "Is Loading ...";
  }
}
