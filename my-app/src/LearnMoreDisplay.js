import React from "react";


function LearnMoreDisplay({ card = ({
    "id": 33612,
    "primaryImage": "https://images.metmuseum.org/CRDImages/aa/original/LC-14_25_1750-006.jpg",
    "title": "Stirrup",
    "artistDisplayName": "",
    "artistDisplayBio": "",
    "objectEndDate": 1650,
    "culture": "Spanish or Italian",
    "medium": "Iron alloy",
    "period": "",
    "tier": 5,
    "price": 500
  })}
){


    return (
    <div className="card-container">
            <h2>Artist: <br/>{card.artistDisplayName}</h2>
            <h3>Culture of origin: <br/>{card.culture}</h3>
            <h3>Time period: <br/>{card.period}</h3>
            <h3>Medium: <br/>{card.medium}</h3>
            <a href={card.objectURL}> Link for more info </a>
    </div>
    )
}

export default LearnMoreDisplay;