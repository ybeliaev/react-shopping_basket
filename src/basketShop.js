import React from "react";

export default class BasketShop extends React.Component {
  render() {
    return (
      <div className="basket-shop">
        <i className="fa fa-shopping-basket" aria-hidden="true" />
        <span>0</span>
      </div>
    );
  }
}
