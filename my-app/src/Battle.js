import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay";

function Battle({ money, moneyState, setMoneyState }) {
  const [opponentCards, setOpponentCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [battleState, setBattle] = useState([]);
  let battleMoney = 0;
  useEffect(() => {
    fetch("http://localhost:3000/players_cards")
      .then((res) => res.json())
      .then((data) => {
        setPlayerCards(data);
      });

    fetch("http://localhost:3000/opponents_cards")
      .then((res) => res.json())
      .then((data) => {
        setOpponentCards(data);
      });
  }, []);

  const beginBattle = () => {
    const opponentMap = opponentCards.map((card) => {
      return <CardDisplay key={card.id} array={card} />;
    });
    const playerMap = playerCards.map((card) => {
      return <CardDisplay key={card.id} array={card} />;
    });
    const playerDivs = (
      <div>
        <div>
          <button className="generic-button" onClick={runBattle}>
            {" "}
            Fight!{" "}
          </button>
          <div>{opponentMap}</div>
        </div>
        <div>{playerMap}</div>
      </div>
    );
    setBattle(playerDivs);
  };

  const runBattle = () => {
    if (playerCards.length === 0) {
      alert("You have no cards! Go buy some more cards!");
      setMoneyState(moneyState + battleMoney);
    } else if (opponentCards.length === 0) {
      alert("The opponenent has been destroyed! Challenge a new one!");
      setMoneyState(moneyState + battleMoney);
    } else {
      const currentPlayerCard =
        playerCards[Math.floor(Math.random() * playerCards.length)];

      const currentOpponentCard =
        opponentCards[Math.floor(Math.random() * opponentCards.length)];

      if (currentPlayerCard.tier < currentOpponentCard.tier) {
        alert(`You  won! Opponent left $${currentOpponentCard.price}!`);
        battleMoney = currentOpponentCard.price + battleMoney;
        // money = money + currentOpponentCard.price;
        console.log("money:", battleMoney);
        setOpponentCards(
          opponentCards.splice(opponentCards.indexOf(currentOpponentCard), 1)
        );
        beginBattle();
        //   console.log(opponentCards);
      } else if (currentPlayerCard.tier > currentOpponentCard.tier) {
        alert("Your card has been defeated!");
        setPlayerCards(
          playerCards.splice(playerCards.indexOf(currentPlayerCard), 1)
        );
        beginBattle();
        //   console.log(playerCards);
      } else {
        const playerNum = Math.floor(Math.random() * 5000);
        const opponentNum = Math.floor(Math.random() * 5000);
        if (playerNum > opponentNum) {
          alert(`You barely won! Opponent left $${currentOpponentCard.price}!`);
          battleMoney = currentOpponentCard.price + battleMoney;
          // money = money + currentOpponentCard.price;
          console.log("money:", battleMoney);
          setOpponentCards(
            opponentCards.splice(opponentCards.indexOf(currentOpponentCard), 1)
          );
          beginBattle();
          // console.log(opponentCards);
        } else if (playerNum < opponentNum) {
          alert("You were barely defeated!");
          setPlayerCards(
            playerCards.splice(playerCards.indexOf(currentPlayerCard), 1)
          );
          beginBattle();
          // console.log(playerCards);
        } else {
          alert("You have tied!");
        }
      }
    }
  };
  return (
    <div>
      <button className="generic-button" onClick={beginBattle}>
        Begin Battle
      </button>
      {battleState}
    </div>
  );
}

export default Battle;
