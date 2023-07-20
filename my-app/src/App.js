import React,{ useState, useEffect, createContext } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./childrenOfApp/Navbar";
import GenerateNewCard from "./childrenOfApp/GenerateNewCard";
import CardInventory from "./childrenOfApp/CardInventory";
import LearnMore from "./childrenOfApp/LearnMore";
import Wallet from "./subComponents/Wallet";

import Battle from "./childrenOfApp/Battle";


function App() {

  const UserContext = createContext();
  const [money, setMoney] = useState(100);

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

  
    // console.log("app",data);
  //       <Wallet />

  //       <RandomCards data={data} />


  return (
    <div>
      {/* <UserContext.Provider value={data}> */}
      <NavBar />
      <Routes>

        <Route exact path="/" element={<Battle/>}/>
        <Route exact path="/GenerateNewCard" element={<GenerateNewCard money={money} setMoney={setMoney}/>}/>
        <Route exact path="/CardInventory" element={<CardInventory />}/>
        <Route exact path="/LearnMore" element={<LearnMore />}/>
      </Routes>

      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;

