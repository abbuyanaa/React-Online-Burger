import React, { Component } from "react";
import SideBar from "../../components/SideBar";
import Toolbar from "../../components/Toolbar";
import OrderPage from "../OrderPage";
import BurgerPage from "../BurgerPage";
import { ShippingPage } from "../ShippingPage";
import styles from "./style.module.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    showSidebar: false,
    favorite: "N/A",
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  choose = (orts) => {
    this.setState({ favorite: orts });
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={styles.Content}>
          <p>Сонгосон орц : {this.state.favorite}</p>
          <Switch>
            <Route path="/orders" component={OrderPage} />
            <Route path="/ship" component={ShippingPage} />
            <Route
              path="/"
              render={() => <BurgerPage choose={this.choose} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
