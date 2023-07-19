import React, { useState } from "react";
import CPUcard from "./CPUcard";
import CardDisplay from "./CardDisplay";

function Battle(){
    const [opponent, setOpponent] = useState([])
    const [userCard, setUserCard] = useState([])

    //Temporary states to simulate 
    const beginBattle = () => {
        const newOpponent = (
            <div>
                <button className="generic-button" onClick={runBattle}> Fight! </button>
                <CPUcard />
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
            <CardDisplay />
            <button className="generic-button" onClick={beginBattle}>Begin Battle</button>
            {opponent}
        </div>
    )
}

export default Battle;