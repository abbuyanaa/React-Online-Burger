import React, { Component } from "react";
import BuildControls from "../../components/BuildControls";
import Burger from "../../components/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
  };

  ortsNemeh = (type) => {
    console.log("=====> " + type);

    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;

    this.setState({ ingredients: newIngredients });
  };

  ortsHasah = (type) => {
    console.log("=====> " + type);

    if (this.state.ingredients[1] !== 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;

      this.setState({ ingredients: newIngredients });
    }
  };

  render() {
    return (
      <div>
        <Burger orts={this.state.ingredients} />
        <BuildControls ortsNemeh={this.ortsNemeh} ortsHasah={this.ortsHasah} />
      </div>
    );
  }
}

export default BurgerBuilder;
