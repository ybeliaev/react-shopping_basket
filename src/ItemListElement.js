import React from "react";

const ItemListElement = ({ brand, cost }) => {
  return (
    <div>
      <span className="list-item-label">{brand}</span>
      <span className="list-item-label">{cost}</span>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default ItemListElement;
