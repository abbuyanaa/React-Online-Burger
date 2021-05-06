import React from "react";
import styles from "./style.module.css";
import BurgerIngredient from "../BurgerIngredient";

const Burger = (props) => (
  <div className={styles.Burger}>
    <BurgerIngredient type="bread-top" />
    <BurgerIngredient type="salad" />
    <BurgerIngredient type="bacon" />
    <BurgerIngredient type="cheese" />
    <BurgerIngredient type="meat" />
    <BurgerIngredient type="bread-bottom" />
  </div>
);

export default Burger;
