import React, { useState } from "react";
import styles from "./App.module.css";

import RegionListContainer from "../region/RegionListContainer";
import ForecastListContainer from "../forecast/ForecastListContainer";

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState();
  return (
    <div className={styles.App}>
      <div className={styles.content}>
        <div className={styles.left}>
          <RegionListContainer
            onRegionSelected={setSelectedRegion}
            selectedRegion={selectedRegion}
          />
        </div>
        <div className={styles.right}>
          <ForecastListContainer region={selectedRegion} />
        </div>
      </div>
    </div>
  );
};

export default App;
