import React, { Component } from "react";
import "./App.css";

import RegionListContainer from "./RegionListContainer";
import ForecastListContainer from "./ForecastListContainer";

class App extends Component {
  state = {
    selectedRegion: null
  };

  handleRegionSelected = region => this.setState({ selectedRegion: region });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="content-left">
            <RegionListContainer
              onRegionSelected={this.handleRegionSelected}
              selectedRegion={this.state.selectedRegion}
            />
          </div>
          <div className="content-right">
            <ForecastListContainer region={this.state.selectedRegion} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
