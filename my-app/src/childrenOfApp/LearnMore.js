import React from "react";
import CardDisplay from "../subComponents/CardDisplay";

function LearnMore(){
    const card = (
        {
            "id": 45613,
            "primaryImage": "https://images.metmuseum.org/CRDImages/as/original/DP276270.jpg",
            "title": "One of the Twelve Devas: Katen",
            "artistDisplayName": "Aeron Smith",
            "objectEndDate": 1392,
            "tier": "B",
            "culture": "Japan",
            "period": "Nanbokuchō period (1336–92)",
            "medium": "Hanging scroll; hand-colored print on paper",
            "objectURL": "https://www.metmuseum.org/art/collection/search/45613"
          }
    )
    const additionalInfo = (
        <div className="flex-container">
        <div className="card-container">
            <h2>Artist: <br/>{card.artistDisplayName}</h2>
            <h3>Culture of origin: <br/>{card.culture}</h3>
            <h3>Time period: <br/>{card.period}</h3>
            <h3>Medium: <br/>{card.medium}</h3>
            <a href={card.objectURL}> Link for more info </a>
        </div>
        </div>
    )

    //This will probably need a State passed down to it, of the currently selected card
    const selectedCard = (
        <div className="flex-container"> 
            <CardDisplay /> 
            {additionalInfo}
        </div>
    ) 

    return (
        <div className="container">
            {selectedCard}
        </div>
    )
}

export default LearnMore; 

