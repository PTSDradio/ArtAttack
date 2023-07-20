import React from "react";


function CardDisplay({ card = ({
    "id": 45613,
    "primaryImage": "https://images.metmuseum.org/CRDImages/as/original/DP276270.jpg",
    "title": "One of the Twelve Devas: Katen",
    "artistDisplayName": "",
    "objectEndDate": 1392,
    "tier": "B"
  })}
){


    return (
        <div className="flex-container">
            <div className="card-container">
                <h2>{card.title}</h2>
                <h3>Tier: {card.tier} </h3>
                <img src={card.primaryImage} alt={card.title}></img>
            </div>
        </div>
    )
}

export default CardDisplay;