import React from "react";

const ItemListElement = ({ brand, cost }) => {
  return (
    <div className="list-item">
      <span className="list-item-brand">Смартфон {brand}:</span>
      <span className="list-item-cost">{cost}$</span>
      <div className="wrapper-btn">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
};

export default ItemListElement;
