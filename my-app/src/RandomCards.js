import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay";

function RandomCards({ data }) {
  const [cardPack, setCardPack] = useState([]);

  useEffect(() => {
    generateRandomCards();
  }, []);
let generatedCards = [];
  const generateRandomCards = () => {
    // check for old ids
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomObject = data[randomIndex];
      if (randomObject && randomObject.id) {
        generatedCards = [randomObject, ...generatedCards];
      }
    }
    setCardPack(generatedCards);
  };

  return (
    <div>
      
      <button onClick={generateRandomCards}>Random Cards</button>
      <div>
        {cardPack.map((data) => (
          <CardDisplay data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default RandomCards;