import React from "react";
import Shadow from "../Shadow";
import styles from "./style.module.css";

const Modal = (props) => (
  <div>
    <Shadow show={props.show} closeConfirmModal={props.closeConfirmModal} />
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className={styles.Modal}
    >
      {props.children}
    </div>
  </div>
);

export default Modal;
