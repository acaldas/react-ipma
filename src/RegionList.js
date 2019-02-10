import React from "react";
import Region from "./Region";
import styles from "./RegionList.module.css";

class RegionList extends React.Component {
  state = {
    local: "",
    filteredRegions: []
  };

  handleInput = event => this.setState({ local: event.target.value });
  handleClick = region => this.props.onRegionSelected(region);

  render() {
    let regions = this.props.regions.filter(
      region =>
        region.local.toLowerCase().indexOf(this.state.local.toLowerCase()) !==
        -1
    );

    return (
      <div className={styles.RegionList}>
        <input
          type="text"
          value={this.state.local}
          onChange={this.handleInput}
        />
        <ul>
          {regions.map(region => (
            <li
              key={region.globalIdLocal}
              onClick={() => this.handleClick(region)}
            >
              <Region
                region={region}
                selected={region.globalIdLocal === this.props.selectedRegion}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RegionList;
