import React from "react";

const Region = ({ region, selected }) => {
  return <h3 className={selected ? "selected" : ""}>{region.local}</h3>;
};

export default Region;
