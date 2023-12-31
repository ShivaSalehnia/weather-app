import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = days[props.date.getDay()];

  return (
    <div>
      <ul className="ClearList">
        <li>{day}</li>
        <li>
          {" "}
          {hours}:{minutes}
        </li>
      </ul>
    </div>
  );
}
