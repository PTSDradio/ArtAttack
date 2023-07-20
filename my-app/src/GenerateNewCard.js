import React, { useState, useEffect } from "react";
import RandomCards from "./RandomCards";
import CardDisplay from "./CardDisplay";

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
    const randomCards = cardPack.map((data) => (
        <CardDisplay card={data} key={data.id} />
      ))


    return (
        <div className="flex-container">
            <h1> Generate New Card </h1>
            <button className="generic-button" onClick={generateRandomCards}> Random Cards</button>
            {randomCards}
        </div>
    )
}

export default GenerateNewCard; 