import React from "react";
import styles from "./style.module.css";
import BurgerIngredient from "../BurgerIngredient";

import { withRouter } from "react-router-dom";

const Burger = (props) => {
  const items = Object.entries(props.orts);

  let content = [];
  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(
        <BurgerIngredient
          choose={props.choose}
          key={`${el[0]}${i + 1}`}
          type={el[0]}
        />
      );
  });

  if (content.length === 0)
    content = <p>Хачиртай талхныхаа орцыг сонгоно уу...</p>;

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(Burger);
