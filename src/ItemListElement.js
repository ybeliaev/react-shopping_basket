import React from "react";

const ItemListElement = ({ brand, cost }) => {
  return (
    <div className="list-item">
      <span className="list-item-brand">Смартфон {brand}:</span>
      <span className="list-item-cost">{cost}$</span>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default ItemListElement;
