import React,{ useState, useEffect } from "react"
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

const [data, setData] = useState([]);
// const [array, setArray] = useState([]);
// const [display, setDisplay] = useState([]);

 
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

      
    
  
 
 
  

  
  // let myPromise = new Promise((cardDisplay) => {
  //   if (array.length === 3) {
  //     setTimeout(cardDisplay(array), 500)
  //   }
  //   else {
  //     console.log("no more cards")
  //   }


  // });
  
  // myPromise.then(
  //   function(value) {cardDisplay(value);},
  // );

  return (
    <div>
      
  
      <Wallet />
      <div> 
        
      </div>
      <RandomCards data={data} />

    </div>
  );
}

export default App;

