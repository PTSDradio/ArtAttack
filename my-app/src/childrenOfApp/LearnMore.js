<<<<<<< HEAD:my-app/src/childrenOfApp/LearnMore.js
import React from "react";
import CardDisplay from "../subComponents/CardDisplay";
=======
import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay";
import LearnMoreDisplay from "./LearnMoreDisplay";
>>>>>>> 03bbe532831704f6e416f8364eefd250d5550066:my-app/src/LearnMore.js

function LearnMore(){
    const [userCards, setUserCards] = useState([])
    
    useEffect(() => {
      fetch('http://localhost:3000/players_cards')
      .then((r) => r.json())
      .then(setUserCards)}, []) 

      const onClick = (card) => {
              console.log(card)
            }
      console.log(userCards)

    const learnMoreCards = (
        userCards.map((card) => (
            <div>
                <div className="display-container">
                    <CardDisplay card={card} onClick={onClick}/> 
                </div>
                    <div className="flex-container">
                        <LearnMoreDisplay card={card}/>
                </div>
             </div>
            )
        ))


    return (
        <div className="inventory-flex-container">
            {learnMoreCards}
        </div>
    )
}

export default LearnMore; 

