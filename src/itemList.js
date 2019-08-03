import React from "react";
import ItemListElement from "./ItemListElement";
const ItemList = ({ itemDate }) => {
  const elements = itemDate.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-item">
        <ItemListElement {...itemProps} />
      </li>
    );
  });
  return <ul>{elements}</ul>;
};

export default ItemList;
