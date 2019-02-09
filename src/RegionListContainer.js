import React from "react";
import api from "./api";
import RegionList from "./RegionList";

class RegionListContainer extends React.Component {
  state = {
    regions: []
  };

  async componentDidMount() {
    let regions = await api.getRegions();
    this.setState({ regions });
  }

  render() {
    return <RegionList regions={this.state.regions} />;
  }
}

export default RegionListContainer;
