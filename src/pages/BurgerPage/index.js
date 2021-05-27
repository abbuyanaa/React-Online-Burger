import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const INGREDIENT_NAMES = {
  bacon: "Гахайн мах",
  cheese: "Бяслаг",
  meat: "Үхрийн мах",
  salad: "Салад",
};

class BurgerPage extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },

    totalPrice: 1000,
    purchasing: false,
    confirmOrder: false,
    lastCustomerName: "N/A",
  };

  componentDidMount = () => {
    axios.get("/orders.json").then((response) => {
      let arr = Object.entries(response.data);
      arr = arr.reverse();
      arr.forEach((el) => {
        console.log(el[1].hayag.name + " ==> " + el[1].dun);
      });

      const lastOrder = arr[arr.length - 1][1];

      this.setState({
        lastCustomerName: lastOrder.hayag.name,
        ingredients: lastOrder.orts,
        totalPrice: lastOrder.dun,
      });
    });
  };

  continueOrder = () => {
    const order = {
      orts: this.state.ingredients,
      dun: this.state.totalPrice,
      hayag: {
        name: "Saraa",
        city: "Ub",
        street: "10r horoolol 23-12",
      },
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        alert("Amjilttai hadgaladglaa");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Continue Order");
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  ortsNemeh = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;

    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      purchasing: true,
      totalPrice: newPrice,
      ingredients: newIngredients,
    });
  };

  ortsHasah = (type) => {
    if (this.state.ingredients[1] !== 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;

      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

      this.setState({
        purchasing: newPrice > 1000,
        totalPrice: newPrice,
        ingredients: newIngredients,
      });
    }
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          <OrderSummary
            onCancel={this.closeConfirmModal}
            onContinue={this.continueOrder}
            price={this.state.totalPrice}
            ingredientsNames={INGREDIENT_NAMES}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <p style={{ width: "100%", textAlign: "center", fontSize: "28px" }}>
          Сүүлчийн захиалагч : {this.state.lastCustomerName}
        </p>
        <Burger orts={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientsNames={INGREDIENT_NAMES}
          disabled={!this.state.purchasing}
          price={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
        />
      </div>
    );
  }
}

export default BurgerPage;
