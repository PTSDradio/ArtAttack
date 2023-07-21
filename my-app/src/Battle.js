import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay";

function Battle({ moneyState, setMoneyState }) {
  const [opponentCards, setOpponentCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [battleState, setBattle] = useState([]);

  let battleMoney = 0;

  const fetchPlayerCards = async () => {
    const response = await fetch("http://localhost:3000/players_cards");
    const data = await response.json();
    let generatedCards = [];

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomObject = data[randomIndex];
      if (randomObject && randomObject.id) {
        generatedCards = [randomObject, ...generatedCards];
      }
    }

    setPlayerCards(generatedCards);
  };

  const fetchOpponentCards = async () => {
    const response = await fetch("http://localhost:3000/cards");
    const data = await response.json();
    let generatedCards = [];

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomObject = data[randomIndex];
      if (randomObject && randomObject.id) {
        generatedCards = [randomObject, ...generatedCards];
      }
    }
    setOpponentCards(generatedCards);
    // console.log(generatedCards);
  };

  useEffect(() => {
    async function fetchData() {
      await Promise.all([fetchPlayerCards(), fetchOpponentCards()]);
    }
    fetchData();
  }, []);

  const handleNewBattle = () => {
    async function fetchData() {
      await Promise.all([fetchPlayerCards(), fetchOpponentCards()]);
    }
    fetchData();
  };

  const onClick = (card) => {
    console.log(card.id);
  };

  const beginBattle = () => {
    handleNewBattle();
    const opponentMap = opponentCards.map((card) => {
      return <CardDisplay key={card.id} card={card} onClick={onClick} />;
    });
    const playerMap = playerCards.map((card) => {
      return <CardDisplay key={card.id} card={card} onClick={onClick} />;
    });
    const playerDivs = (
      <div className="battle">
        <button className="generic-button" onClick={runBattle}>
          Eat My Shorts!{" "}
        </button>
        <br />
        <div className="flex-container enemy">{opponentMap}</div>
        <br />
        <div className="flex-container">{playerMap}</div>
      </div>
    );
    setBattle(playerDivs);
  };

  const runBattle = () => {
    if (playerCards.length === 0) {
      alert("You have no cards! Go buy some more cards!");
      setMoneyState(moneyState + battleMoney);
      handleNewBattle();
    } else if (opponentCards.length === 0) {
      alert(
        "The opponenent has been destroyed! Click begin battle to challenge a new one!"
      );
      setMoneyState(moneyState + battleMoney);
      handleNewBattle();
    } else {
      const currentPlayerCard =
        playerCards[Math.floor(Math.random() * playerCards.length)];

      const currentOpponentCard =
        opponentCards[Math.floor(Math.random() * opponentCards.length)];

      if (currentPlayerCard.tier < currentOpponentCard.tier) {
        alert(`You  won! Opponent left $${currentOpponentCard.price}!`);
        battleMoney = currentOpponentCard.price + battleMoney;
        // money = money + currentOpponentCard.price;
        // console.log("money:", battleMoney);
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
          // console.log("money:", battleMoney);
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
