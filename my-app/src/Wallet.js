import React, { useState, useEffect } from "react";


function Wallet() {
  let startMoney = 100;
  const [moneyState, setMoneyState] = useState(startMoney);

  const handleSubmit = (e) => {
    e.preventDefault();
    const addMoney = Number(e.target.elements.amount.value);
    const moneyTotal = addMoney + moneyState;
    setMoneyState(moneyTotal);
    e.target.reset();
  };

  return (
    <div className="wallet-container">
      <form id="wallet" onSubmit={handleSubmit} >
        <h3>Add Money to Wallet</h3>
        <input type="number" name="amount" placeholder="Enter Amount" />
        <button type="submit" className="generic-button">Add Money</button>
      </form>

      <h3>Total Funds: {moneyState}</h3>
      
    </div>
  );
}

export default Wallet;
