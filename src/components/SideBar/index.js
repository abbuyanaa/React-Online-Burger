import React from "react";
import styles from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../General/Shadow";

const SideBar = (props) => {
  let classes = [styles.SideBar, styles.Close];

  if (props.showSidebar) {
    classes = [styles.SideBar, styles.Open];
  }
  return (
    <div>
      <Shadow show={props.showSidebar} darahad={props.toggleSideBar} />
      <div onClick={props.toggleSideBar} className={classes.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
