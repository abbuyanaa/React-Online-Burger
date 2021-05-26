import React from "react";

import styles from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => (
  <div>
    <ul className={styles.Menu}>
      <MenuItem active link="/">
        БУРГЕР
      </MenuItem>
      <MenuItem link="/checkout">ТӨЛБӨР</MenuItem>
    </ul>
  </div>
);

export default Menu;
