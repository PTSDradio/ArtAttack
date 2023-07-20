
import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay";
import Wallet from "./Wallet";

function GenerateNewCard(){
    const [cardPack, setCardPack] = useState([]);

    useEffect(() => {
      generateRandomCards();
    }, []);
  
    const generateRandomCards = () => {
      let generatedCards = [];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomObject = data[randomIndex];
        if (randomObject && randomObject.id) {
          generatedCards = [randomObject, ...generatedCards];
        }
      }
      setCardPack(generatedCards);
    };
  
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchCardPack();
      
    }, []);
    
    const fetchCardPack = () => {
    
      fetch(`http://localhost:3000/cards`)
      .then(res => res.json())
      .then(data => {

      setData(data);
      })
    } 

    const buyCard = () => {
        // function here to minus price from wallet and fetch-post card to User's cards
    }

    const randomCards = cardPack.map((data) => (
        <div>
            <CardDisplay card={data} key={data.id} />
            <button className="generic-button" onClick={buyCard}> Buy Card </button>
        </div>
      ))


    return (
        <div className="flex-container">
          <Wallet />
            <button className="generic-button" onClick={generateRandomCards}> Generate Random Cards</button>
            {randomCards}
        </div>
    )
}

export default GenerateNewCard; 