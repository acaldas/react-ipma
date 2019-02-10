import React from "react";
import styles from "./Forecast.module.css";
const icons = require.context("./icons", true);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const Forecast = ({ forecast }) => {
  const date = new Date(forecast.forecastDate);
  const dayS = days[date.getDay()];
  return (
    <div className={styles.Forecast}>
      <p className={styles.date}>
        <span className={styles.day}>{dayS}</span>
        <span>{forecast.forecastDate}</span>
      </p>
      <img
        className={styles.image}
        src={icons(`./${forecast.idWeatherType}.png`)}
        alt={`${forecast.idWeatherType}`}
      />
      <p className={styles.temperature}>
        <span className={styles.maximum}>{forecast.tMax}º </span>
        <span className={styles.minimum}>{forecast.tMin}º</span>
      </p>
      <p className={styles.precipitation}>
        <span>Precipitation: </span>
        <span>{forecast.precipitaProb}%</span>
      </p>
    </div>
  );
};

export default Forecast;
