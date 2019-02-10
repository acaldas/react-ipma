import React, { useState, useMemo } from "react";
import Region from "./Region";
import styles from "./RegionList.module.css";

const RegionList = ({ regions, selectedRegion, onRegionClicked }) => {
  const [query, setQuery] = useState("");

  const filteredRegions = useMemo(
    () =>
      regions.filter(
        region => region.local.toLowerCase().indexOf(query.toLowerCase()) !== -1
      ),
    [regions, query]
  );

  const handleInput = event => setQuery(event.target.value);

  return (
    <div className={styles.RegionList}>
      <div className={styles.queryInput}>
        <label className={styles.label} htmlFor="region-input">
          Search regions:
        </label>
        <input
          id="region-input"
          className={styles.input}
          type="text"
          value={query}
          onChange={handleInput}
        />
      </div>
      <ul className={styles.list}>
        {filteredRegions.map(region => (
          <li
            key={region.globalIdLocal}
            className={styles.item}
            onClick={() => onRegionClicked(region)}
          >
            <Region
              region={region}
              selected={
                selectedRegion &&
                selectedRegion.globalIdLocal === region.globalIdLocal
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegionList;
