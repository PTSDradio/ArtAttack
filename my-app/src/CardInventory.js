import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay";

function CardInventory() {
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/players_cards")
      .then((r) => r.json())
      .then(setUserCards);
  }, []);

  const sellCard = (e) => {
    console.log(e.target);
  };

  const userCardInventory = userCards.map((card) => (
    <div key={card.id} className="display-container">
      <CardDisplay card={card} />
      <button className="generic-button" onClick={sellCard}>
        {" "}
        Sell Card
      </button>
    </div>
  ));

  return <div className="inventory-flex-container">{userCardInventory}</div>;
}

export default CardInventory;
