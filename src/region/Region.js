import React from "react";
import styles from "./Region.module.css";

const Region = ({ region, selected }) => (
  <p className={`${styles.Region} ${selected && styles.selected}`}>
    {region.local}
  </p>
);

export default Region;
