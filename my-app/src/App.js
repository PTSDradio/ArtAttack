import React,{ useState, useEffect, createContext } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./Navbar";
import GenerateNewCard from "./GenerateNewCard";
import CardInventory from "./CardInventory";
import LearnMore from "./LearnMore";
import Wallet from "./Wallet";
import Battle from "./Battle";


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



  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Battle/>}/>
        <Route exact path="/GenerateNewCard" element={<GenerateNewCard />}/>
        <Route exact path="/CardInventory" element={<CardInventory />}/>
        <Route exact path="/LearnMore" element={<LearnMore />}/>
      </Routes>
    </div>
  );
}

export default App;

