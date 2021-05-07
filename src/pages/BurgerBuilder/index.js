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
  };
  render() {
    return (
      <div>
        <Burger orts={this.state.ingredients} />
        <BuildControls ortsNemeh={this.ortsNemeh} />
      </div>
    );
  }
}

export default BurgerBuilder;
