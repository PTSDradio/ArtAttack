import React from "react";

function UserCard(){
    const card = (
        {
            "id": 45613,
            "primaryImage": "https://images.metmuseum.org/CRDImages/as/original/DP276270.jpg",
            "title": "One of the Twelve Devas: Katen",
            "artistDisplayName": "",
            "objectEndDate": 1392,
            "tier": "B"
          }
    )

    return (
    <div className="container">
        <div className="card-container">
            <h1>{card.title}</h1>
            <h2>Tier: {card.tier} </h2>
            <img src={card.primaryImage} alt={card.title}></img>
        </div>
    </div>
    )
}

export default UserCard;