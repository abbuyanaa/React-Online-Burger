import React from "react";

import logoImage from "../../assets/images/burger-logo.png";
import styles from "./style.module.css";

const Logo = () => (
  <div className={styles.Logo}>
    <img src={logoImage} />
  </div>
);

export default Logo;
