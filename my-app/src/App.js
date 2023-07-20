import React,{ useState, useEffect, createContext } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./Navbar";
import GenerateNewCard from "./GenerateNewCard";
import CardInventory from "./CardInventory";
import LearnMore from "./LearnMore";
import Home from "./Home";
import Wallet from "./Wallet";
import BuySellCards from "./BuySellCards";

import RandomCards from "./RandomCards";


function App() {

  const UserContext = createContext();

  const [data, setData] = useState([]);



 
  useEffect(() => {

    fetchCardPack();
  
  }, []);

  const fetchCardPack = () => {

    fetch(`http://localhost:3000/cards`)
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
  } 

        
      
    
  
  
    

  
    console.log("app",data);
  //       <Wallet />

  //       <RandomCards data={data} />


  return (
    <div>
      <UserContext.Provider value={data}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/GenerateNewCard" element={<GenerateNewCard cards={data}/> }/>
        <Route exact path="/CardInventory" element={<CardInventory cards={data}/>}/>
        <Route exact path="/LearnMore" element={<LearnMore cards={data}/>}/>

      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

