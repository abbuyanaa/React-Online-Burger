import React from "react";
import styles from "./style.module.css";

const HamburgerMenu = (props) => (
  <div onClick={props.toggleSideBar} className={styles.HamburgerMenu}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default HamburgerMenu;
