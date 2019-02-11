import React from "react";
import Forecast from "./Forecast";
import styles from "./ForecastList.module.css";

const ForecastList = ({ forecasts, region }) => (
  <div className={styles.ForecastList}>
    <h1 className={styles.title}>{region.local}</h1>
    {forecasts.length ? (
      <ul className={styles.list}>
        {forecasts.map((forecast, index) => (
          <li key={index} className={styles.item}>
            <Forecast forecast={forecast} />
          </li>
        ))}
      </ul>
    ) : (
      <p className={styles.error}>No forecasts found</p>
    )}
  </div>
);

export default ForecastList;
