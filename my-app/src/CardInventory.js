import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay";

function CardInventory({onClick}) {
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/players_cards")
      .then((r) => r.json())
      .then(setUserCards);
  }, []);
  const handleclick=(card)=>{
    // console.log("sup")
  }

  const userCardInventory = userCards.map((card) => (
    <div key={card.id} className="display-container">
      <CardDisplay card={card} onClick={onClick}/>
    </div>
  ));

  return <div className="inventory-flex-container">{userCardInventory}</div>;
}

export default CardInventory;
