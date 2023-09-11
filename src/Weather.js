import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";
import WeatherForcast from "./WeatherForcast";
export default function Weather(props) {
  let [Weather, setWeather] = useState({ ready: false });
  const [cityName, setCityName] = useState(props.city);

  function handleResponse(response) {
    setWeather({
      ready: true,
      name: response.data.name,
      temprature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      Wind: Math.round(response.data.wind.speed),
      Description: response.data.weather[0].description,
      Icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }

  function searchCity() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f3009e4852fa0a079dab291dabf020c4&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCity(event) {
    setCityName(event.target.value);
  }

  if (Weather.ready) {
    return (
      <div className="WeatherEverywhere">
        <h1>Weather Everywhere</h1>
        <h2>Check Every City's Weather Before Travelling</h2>

        <div className="SearchSection">
          <h4>Curious about the weather of ... </h4>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-sm-9">
                <input
                  type="search"
                  className="form-control w-100"
                  placeholder="Search City"
                  onChange={handleCity}
                />
              </div>
              <div className="col-sm-3">
                <input
                  type="submit"
                  value="Find"
                  className="btn btn-outline-dark buttonColor"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                />
              </div>
            </div>
          </form>
          <div className="row CityTemp">
            <div className="col-sm-6 p-0 w-80">
              <h4 className="City">{Weather.name}</h4>
              <FormattedDate date={Weather.date} />
            </div>
            <div className="col-sm-6">
              <WeatherIcon data={Weather.Icon} size={64} />
            </div>
          </div>
          <ul className="WeatherState">
            <li>
              <WeatherUnit celsius={Weather.temprature} />
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
          <WeatherForcast coordinates={Weather.coordinates} />
        </div>
      </div>
    );
  } else {
    searchCity();
    return "Is Loading ...";
  }
}
