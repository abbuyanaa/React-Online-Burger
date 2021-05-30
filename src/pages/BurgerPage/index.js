import React, { Component } from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";

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
    loading: false,
  };

  componentDidMount = () => {};

  continueOrder = () => {
    const params = [];

    for (let orts in this.state.ingredients) {
      params.push(orts + "=" + this.state.ingredients[orts]);
    }

    params.push("dun=" + this.state.totalPrice);

    this.props.history.push({
      pathname: "/ship",
      search: params.join("&"),
    });

    this.closeConfirmModal();
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

    console.log("Hey:", this.props);
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
              price={this.state.totalPrice}
              ingredientsNames={INGREDIENT_NAMES}
              ingredients={this.state.ingredients}
            />
          )}
        </Modal>

        <Burger choose={this.props.choose} orts={this.state.ingredients} />

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

const a = (state) => {
  return {
    burgeriinOrts: state.ingredients,
    niitUne: state.totalPrice,
  };
};

const b = (dispatch) => {
  return {
    ortsNem: (ortsNem) => dispatch({ type: "ADD_INGREDIENT" }),
    ortsHas: (ortsHas) => dispatch({ type: "REMOVE_INGREDIENT" }),
  };
};

export default connect(a, b)(BurgerPage);
