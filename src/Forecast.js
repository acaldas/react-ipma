import React from "react";

const Forecast = ({ forecast }) => (
  <div>
    <p>{forecast.forecastDate}</p>
    <p>{forecast.tMin}ºc</p>
    <p>{forecast.tMax}ºc</p>
    <p>{forecast.precipitaProb}%</p>
  </div>
);

export default Forecast;
