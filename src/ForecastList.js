import React from "react";
import Forecast from "./Forecast";

const ForecastList = ({ forecasts }) => (
  <ul>
    {forecasts.map((forecast, index) => (
      <li key={index}>
        <Forecast forecast={forecast} />
      </li>
    ))}
  </ul>
);

export default ForecastList;
