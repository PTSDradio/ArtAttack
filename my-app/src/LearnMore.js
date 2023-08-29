import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay";
import LearnMoreDisplay from "./LearnMoreDisplay";

function LearnMore({learnArray, setLearnArray}){
    const [userCards, setUserCards] = useState([])
    
    useEffect(() => {
  }, []) 

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

