import React from "react";
import ReactDOM from "react-dom";
import BasketShop from "./basketShop";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox!!!</h1>
      <h2>Работа с корзиной товара</h2>
      <BasketShop />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
