import React, { Component } from "react";
import "./App.css";

import RegionListContainer from "./RegionListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RegionListContainer />
        </header>
      </div>
    );
  }
}

export default App;
