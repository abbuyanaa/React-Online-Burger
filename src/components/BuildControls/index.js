import React from "react";
import BuildControl from "../BuildControl";
import styles from "./style.module.css";

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Бургерийн үнэ: <strong>{props.price}</strong>
      </p>
      {Object.keys(props.ingredientsNames).map((el) => (
        <BuildControl
          key={el}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
          disabled={props.disabledIngredients}
          type={el}
          orts={props.ingredientsNames[el]}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={props.disabled}
        className={styles.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;
