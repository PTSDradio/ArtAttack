import React, { useState, useEffect } from "react";
import CPUcard from "./CPUcard";
import CardDisplay from "./CardDisplay";

function Battle() {
  const [opponentCards, setOpponentCards] = useState([]);
  const [userCards, setUserCard] = useState([]);
  const [opponentState, setOpponent] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:3000/players_cards")
      .then((res) => res.json())
      .then((data) => {
        setUserCard(data);
      });

    fetch("http://localhost:3000/opponents_cards")
      .then((res) => res.json())
      .then((data) => {
        setOpponentCards(data);
      });
  }, []);

  const beginBattle = () => {
    console.log("begin battle");
    const opponentDivs = (
      <div>
        <button className="generic-button" onClick={runBattle}>
          {" "}
          Fight!{" "}
        </button>
      </div>
    );
    setOpponent(opponentDivs);
  };

  const runBattle = () => {
    const currentPlayerCard =
      userCards[Math.floor(Math.random() * userCards.length)];

    const currentOpponentCard =
      opponentCards[Math.floor(Math.random() * opponentCards.length)];

    if (currentPlayerCard.tier > currentOpponentCard.tier) {
      window.alert("You have won!");
    } else if (currentPlayerCard.tier < currentOpponentCard.tier) {
      window.alert("Your card has been defeated!");
    } else {
      const playerNum = Math.floor(Math.random() * 5000);
      const opponentNum = Math.floor(Math.random() * 5000);
      if (playerNum > opponentNum) {
        window.alert("You have won!");
      } else if (playerNum < opponentNum) {
        window.alert("Your card has been defeated!");
      } else {
        window.alert("You have tied!");
      }
    }
  };
  return (
    <div>
      <button className="generic-button" onClick={beginBattle}>
        Begin Battle
      </button>
      {opponentState}
    </div>
  );

}

export default Battle;
