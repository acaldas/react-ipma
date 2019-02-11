import React, { useState, useEffect } from "react";
import api from "../common/api";
import ForecastList from "./ForecastList";
import styles from "./ForecastListContainer.module.css";

const ForecastListContainer = ({ region }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [forecasts, setForecasts] = useState([]);

  async function getForecasts() {
    const forecasts = await api.getForecasts(region.globalIdLocal);
    setForecasts(forecasts || []);
    setLoaded(true);
  }

  // retrieves the forecasts whenever the provided region changes
  useEffect(() => {
    region && getForecasts();
    return () => {
      setLoaded(false);
      setForecasts([]);
    };
  }, [region]);

  return (
    <div
      className={`${styles.ForecastListContainer} ${isLoaded && styles.loaded}`}
    >
      {isLoaded ? <ForecastList forecasts={forecasts} region={region} /> : null}
    </div>
  );
};

export default ForecastListContainer;
