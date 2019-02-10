import React from "react";
import styles from "./Region.module.css";

const Region = ({ region, selected }) => (
  <span className={`${styles.Region} ${selected && styles.selected}`}>
    {region.local}
  </span>
);

export default Region;
