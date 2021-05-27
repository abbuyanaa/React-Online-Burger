import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const MenuItem = (props) => (
  <li className={styles.MenuItem}>
    <NavLink
      exact={props.exact}
      activeClassName={styles.active}
      to={props.link}
    >
      {props.children}
    </NavLink>
  </li>
);

export default MenuItem;
