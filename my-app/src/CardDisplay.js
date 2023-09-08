import React from "react";

function CardDisplay({ card, onClick }) {
  //   console.log(card);

  return (
    <div>
    
      <div
        className="card-container"
        onClick={(e) => {
          e.stopPropagation();
          onClick(card);
        }}
      >
        <h2>
          {card.title.length > 50
            ? `${card.title.substring(0, 50)}...`
            : card.title}
        </h2>
        <h3>Tier: {card.tier} </h3>
        <div className="card-image-container" >
        <img src={card.primaryImage} alt={card.title}></img>
        </div>
      </div>
    </div>
  );
}

export default CardDisplay;
