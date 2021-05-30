import React from "react";
import styles from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import { Route } from "react-router-dom";
import ContactData from "../../components/ContactData";

export class ShippingPage extends React.Component {
  state = {
    dun: 0,
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 1,
      meat: 1,
    },
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);

    const ingredients = {};

    for (let param of query.entries()) {
      ingredients[param[0]] = param[1];
    }

    this.setState({ ingredients });
  }

  cancelOrder = () => {
    this.props.history.goBack();
  };

  showContactData = () => {
    this.props.history.replace("/ship/contact");
  };

  render() {
    return (
      <div className={styles.ShippingPage}>
        <p style={{ fontSize: "24px" }}>
          Таны захиалга амттай байх болно гэж найдаж байна
        </p>
        <Burger orts={this.state.ingredients} />
        <Button
          daragdsan={this.cancelOrder}
          btnType="Danger"
          text="ЗАХИАЛГЫГ ЦУЦЛАХ"
        />
        <Button
          daragdsan={this.showContactData}
          btnType="Success"
          text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
        />

        <Route path="/ship/contact" component={ContactData} />
      </div>
    );
  }
}
