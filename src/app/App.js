import React, { Component } from "react";
import styles from "./App.module.css";

import RegionListContainer from "../region/RegionListContainer";
import ForecastListContainer from "../forecast/ForecastListContainer";

class App extends Component {
  state = {
    selectedRegion: null
  };

  handleRegionSelected = region => this.setState({ selectedRegion: region });

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.content}>
          <div className={styles.left}>
            <RegionListContainer
              onRegionSelected={this.handleRegionSelected}
              selectedRegion={this.state.selectedRegion}
            />
          </div>
          <div className={styles.right}>
            <ForecastListContainer region={this.state.selectedRegion} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
