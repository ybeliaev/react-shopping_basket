import React from "react";
import BasketShop from "./basketShop";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Работа с корзиной товара</h2>
        <BasketShop />
      </div>
    );
  }
}
