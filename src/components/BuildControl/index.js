import React from "react";
import styles from "./style.module.css";

const BuildControl = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.orts}</div>
    <button
      disabled={props.disabled[props.type]}
      onClick={() => props.ortsHasah(props.type)}
      className={styles.Less}
    >
      Хасах
    </button>
    <button onClick={() => props.ortsNemeh(props.type)} className={styles.More}>
      Нэмэх
    </button>
  </div>
);

export default BuildControl;
