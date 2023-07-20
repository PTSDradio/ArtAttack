import React from "react";

function CardDisplay({ card, onClick }) {
  console.log(card);

  return (
    <div className="flex-container">
      <div
        className="card-container"
        onClick={(e) => {
          e.stopPropagation();
          onClick(card);
        }}
      >
        <h2>{card.title}</h2>
        <h3>Tier: {card.tier} </h3>
        <img src={card.primaryImage} alt={card.title}></img>
      </div>
    </div>
  );
}

export default CardDisplay;
