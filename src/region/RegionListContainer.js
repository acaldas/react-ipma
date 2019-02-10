import React, { useState, useEffect } from "react";
import api from "../common/api";
import RegionList from "./RegionList";

const RegionListContainer = ({ onRegionSelected, selectedRegion }) => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    api.getRegions().then(setRegions);
  }, []);

  return (
    <RegionList
      regions={regions}
      onRegionClicked={onRegionSelected}
      selectedRegion={selectedRegion}
    />
  );
};

export default RegionListContainer;
