import React from "react";
import styles from "./style.module.css";

const Button = (props) => (
  <button
    onClick={props.daragdsan}
    className={`${styles.Button} ${styles[props.btnType]}`}
  >
    {props.text}
  </button>
);

export default Button;
