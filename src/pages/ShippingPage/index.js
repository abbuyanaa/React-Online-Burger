import React from "react";
import styles from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import { Route } from "react-router-dom";
import ContactData from "../../components/ContactData";

export class ShippingPage extends React.Component {
  state = {
    ingredients: {},
    price: 0,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);

    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] !== "dun") ingredients[param[0]] = param[1];
      else price = param[1];
    }

    this.setState({ ingredients, price });
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
        <p style={{ fontSize: "24px" }}>Дүн : {this.state.price}</p>
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

        <Route path="/ship/contact">
          <ContactData
            ingredients={this.state.ingredients}
            price={this.state.price}
          />
        </Route>

        {/* <Route
          path="/ship/contact"
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
            />
          )}
        ></Route> */}
      </div>
    );
  }
}
