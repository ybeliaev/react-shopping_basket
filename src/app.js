import React from "react";
import BasketShop from "./basketShop";
import ItemList from "./itemList";

export default class App extends React.Component {
  state = {
    inputData: [
      { id: 1, brand: "Apple", cost: 800, balance: 10 },
      { id: 2, brand: "Xiaomi", cost: 700, balance: 8 },
      { id: 3, brand: "Sumsung", cost: 750, balance: 9 },
      { id: 4, brand: "Meizu", cost: 680, balance: 12 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h2>Работа с корзиной товара</h2>
        <BasketShop />
        <ItemList itemDate={this.state.inputData} />
      </div>
    );
  }
}
