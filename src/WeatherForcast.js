import React, { useState, useEffect } from "react";
import "./WeatherForcast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForcastDay";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);

  function handleForcast(response) {
    setLoaded(true);
    setForcast(response.data.daily);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForcast container">
        <div className="row">
          {forcast.map(function (dailyForecast, index) {
            if ((index < 6) & (index > 0)) {
              return (
                <div className="col ms-3" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleForcast);

    return null;
  }
}
