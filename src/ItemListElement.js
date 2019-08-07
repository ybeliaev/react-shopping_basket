import React from "react";

const ItemListElement = ({ brand, cost, increaseItem, decreaseItem }) => {
  return (
    <div className="list-item">
      <span className="list-item-brand">Смартфон {brand}:</span>
      <span className="list-item-cost">{cost}$</span>
      <div className="wrapper-btn">
        <button onClick={increaseItem}>+</button>
        <button onClick={decreaseItem}>-</button>
      </div>
    </div>
  );
};

export default ItemListElement;
