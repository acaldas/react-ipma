import React from "react";
import Region from "./Region";

class RegionList extends React.Component {
  state = {
    local: ""
  };

  handleInput = event => this.setState({ local: event.target.value });

  render() {
    let regions = this.props.regions.filter(
      region => region.local.toLowerCase().indexOf(this.state.local) > -1
    );
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.local}
          onChange={this.handleInput}
        />
        <ul>
          {regions.map(region => (
            <Region region={region} key={region.globalIdLocal} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default RegionList;
