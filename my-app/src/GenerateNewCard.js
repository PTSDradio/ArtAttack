import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay";
import Wallet from "./Wallet";

function GenerateNewCard({ moneyState, setMoneyState }) {
  const [cardPack, setCardPack] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchCardPack();
  }, []);

  const handleBuyPull = () => {
    if (moneyState >= 20) {
      setMoneyState((moneyState) => moneyState - 20);
      generateRandomCards();
    } else {
      alert("You don't have enough money");
    }
  };

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
    console.log(cardPack);
  };
  //fetch from all cards and post to players cards
  const handleClick = (card) => {
    //if(wallet> card.price){
    fetch(`http://localhost:3000/cards/${card.id}`)
      .then((res) => res.json())
      .then((data) => purchasedCard(data));
    alert("You bought a card. Remaining money: $" + moneyState);
    setCardPack([]);
  };

  const purchasedCard = (data) => {
    data = {
      artistDisplayBio: data.artistDisplayBio,
      artistDisplayName: data.artistDisplayName,
      culture: data.culture,
      medium: data.medium,
      objectEndDate: data.objectEndDate,
      period: data.period,
      price: data.price,
      primaryImage: data.primaryImage,
      tier: data.tier,
      title: data.title,
    };
    fetch(`http://localhost:3000/players_cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  //
  const fetchCardPack = () => {
    fetch(`http://localhost:3000/cards`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  const randomCards = cardPack.map((data) => (
    <CardDisplay card={data} key={data.id} onClick={handleClick} />
  ));

  return (
    <div className="flex-container">
      <button className="generic-button" onClick={handleBuyPull}>
        {" "}
        Random Cards
      </button>
      <div className="inventory-flex-container">
      {randomCards}
      </div>
    </div>
  );
}
export default GenerateNewCard;
