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



 
useEffect(() => {

  fetchCardPack();
  
}, []);

const fetchCardPack = () => {

  fetch(`http://localhost:3000/cards`)
  .then(res => res.json())
  .then(data => {
>>>>>>> 6760037daa9779af7461cbcb01405f05adfdc6ed

    
    setData(data);



  })
} 

      
    
  
 
 
  

 
  
//       <Wallet />

//       <RandomCards data={data} />


  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/GenerateNewCard" element={<GenerateNewCard />}/>
        <Route exact path="/CardInventory" element={<CardInventory />}/>
        <Route exact path="/LearnMore" element={<LearnMore />}/>

      </Routes>

    </div>
  );
}

export default App;

