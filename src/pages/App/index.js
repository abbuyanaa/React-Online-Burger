import React, { Component } from "react";
import SideBar from "../../components/SideBar";
import Toolbar from "../../components/Toolbar";
import OrderPage from "../OrderPage";
import BurgerPage from "../BurgerPage";
import styles from "./style.module.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
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
          <Switch>
            <Route path="/orders" component={OrderPage} />
            <Route path="/" component={BurgerPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
