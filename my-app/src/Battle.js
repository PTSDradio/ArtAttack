import React, { useState } from "react";
import CPUcard from "./CPUcard";

function Battle(){
    const [opponent, setOpponent] = useState([])

    const beginBattle = () => {
        const newOpponent = (
            <div>
                <button className="fight-button" onClick={runBattle}> Fight! </button>
            <div className="opponent-card-container">
                 <CPUcard />
             </div>
             </div>
        ) 
        setOpponent(newOpponent);
    }

    const runBattle = () => {
        //This is where logic will go, to compare the tiers of user card versus CPU card. We can also have a deal damage system. 
        window.alert("Your card has been defeated!")
        
    }

    return (
        <div>
            <button className="battle-button" onClick={beginBattle}>Begin Battle</button>
            {opponent}
        </div>
    )
}

export default Battle;