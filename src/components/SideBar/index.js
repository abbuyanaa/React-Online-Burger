import React from "react";
import styles from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../General/Shadow";

const SideBar = (props) => {
  let classes = [styles.SideBar, styles.Close];
  return (
    <div>
      <Shadow show={props.showSidebar} />
      <div className={classes.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
