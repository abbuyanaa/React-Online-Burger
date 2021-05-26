import React from "react";
import styles from "./style.module.css";

const MenuItem = (props) => (
  <li className={styles.MenuItem}>
    <a className={props.active ? styles.active : null} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default MenuItem;
