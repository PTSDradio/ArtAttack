import React from "react";

function CardDisplay({ card }){

    return (
        <div className="card-container">
            <h2>{card.title}</h2>
            <h3>Tier: {card.tier} </h3>
            <img src={card.primaryImage} alt={card.title}></img>
        </div>
    )
}

export default CardDisplay;