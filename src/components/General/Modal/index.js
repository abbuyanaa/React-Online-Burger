import React from "react";
import styles from "./style.module.css";

const Modal = (props) => (
  <div
    onClick={props.closeConfirmModal}
    style={{
      transform: props.show ? "translateY(0)" : "translateY(-100vh)",
      opacity: props.show ? "1" : "0",
    }}
    className={styles.Modal}
  >
    {props.children}
  </div>
);

export default Modal;
