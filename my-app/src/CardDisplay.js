import React from "react";

function CardDisplay({ card }){

    return (
        <div className="card-container">
            <h1>{card.title}</h1>
            <h2>Tier: {card.tier} </h2>
            <img src={card.primaryImage} alt={card.title}></img>
        </div>
    )
}

export default CardDisplay;