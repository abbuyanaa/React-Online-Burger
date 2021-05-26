import React from "react";
import BuildControl from "../BuildControl";
import styles from "./style.module.css";

const BuildControls = (props) => {
  const controls = {
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    meat: "Үхрийн мах",
    salad: "Салад",
  };
  return (
    <div className={styles.BuildControls}>
      <p>
        Бургерийн үнэ: <strong>{props.price}</strong>
      </p>
      {Object.keys(controls).map((el) => (
        <BuildControl
          key={el}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
          disabled={props.disabledIngredients}
          type={el}
          orts={controls[el]}
        />
      ))}
      <button disabled={props.disabled} className={styles.OrderButton}>
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;
