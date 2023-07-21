import React, { useState, useEffect, createContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./Navbar";
import GenerateNewCard from "./GenerateNewCard";
import CardInventory from "./CardInventory";
import LearnMore from "./LearnMore";
import Wallet from "./Wallet";
import Gen from "./BuySellCards";
import Battle from "./Battle";
import CardDisplay from "./CardDisplay";

import RandomCards from "./RandomCards";

function App() {
  const [data, setData] = useState([]);

  const [moneyState, setMoneyState] = useState(10000);

  const [learnArray, setLearnArray] = useState([]);

  const UserContext = createContext();

  // const [data, setData] = useState([]);

  const handleLearnMore = (card) => {
    setLearnArray([card]);
  }

  useEffect(() => {
    fetchCardPack();
    fetch("http://localhost:3000/players_cards")
    .then((res) => res.json())
    .then(setLearnArray);
  }, []);

  const fetchCardPack = () => {
    fetch(`http://localhost:3000/cards`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div>
      {/* <UserContext.Provider value={data}> */}
      <NavBar />
      
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Battle moneyState={moneyState} setMoneyState={setMoneyState} />
          }
        />
        <Route
          exact
          path="/GenerateNewCard"
          element={
            <GenerateNewCard
              data={data}
              moneyState={moneyState}
              setMoneyState={setMoneyState}
            />
          }
        />
        <Route exact path="/CardInventory" element={<CardInventory onClick={handleLearnMore}/>} />
        <Route exact path="/LearnMore" element={<LearnMore data={data} learnArray={learnArray} setLearnArray={setLearnArray}/>} />
      </Routes>
      {/* </UserContext.Provider> */}
      <div>Money: {moneyState}</div>
    </div>
  );
}

export default App;
