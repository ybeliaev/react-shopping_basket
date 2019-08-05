import React from "react";

const SumElement = ({ brand, cost }) => {
  return (
    <div className="sum-input">
      <span className="sum-text">Итоговая сумма:</span>
      <input type="text" placeholder="Сумма оплаты" />
    </div>
  );
};

export default SumElement;
