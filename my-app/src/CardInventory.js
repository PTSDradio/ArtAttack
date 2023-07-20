import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay";

//For this to work, it will need a state passed down (or created) as the array of User's cards 

// [{
//   "id": 1417,
//   "primaryImage": "https://images.metmuseum.org/CRDImages/ad/original/17651.jpg",
//   "title": "Card Table",
//   "artistDisplayName": "",
//   "objectEndDate": 1805,
//   "tier": "E"
// },
// {
//   "id": 54804,
//   "primaryImage": "https://images.metmuseum.org/CRDImages/as/original/DP135878.jpg",
//   "title": "Spring Rain Collection (Harusame shū), vol. 1: Plum Tree in Bloom",
//   "artistDisplayName": "Ryūryūkyo Shinsai",
//   "objectEndDate": 1810,
//   "tier": "E"
// },
// {
//   "id": 45613,
//   "primaryImage": "https://images.metmuseum.org/CRDImages/as/original/DP276270.jpg",
//   "title": "One of the Twelve Devas: Katen",
//   "artistDisplayName": "",
//   "objectEndDate": 1392,
//   "tier": "B"
// }]

function CardInventory(){
    const [userCards, setUserCards] = useState([])
    
    useEffect(() => {

      fetch("http://localhost:3000/players_cards")
      .then(res => res.json())
      .then(data => setUserCards(data))
      // setUserCards(data)
    }, []) 

    const userCardInventory = (
        userCards.map((card) => (
          <div className="display-container">
            <CardDisplay key={card.id} card={card}/> 
            <button className="generic-button"> Sell Card</button>
          </div>
        ))
    )

    return (
        <div className="flex-container">
            {userCardInventory}
        </div>
    )
}

export default CardInventory; 