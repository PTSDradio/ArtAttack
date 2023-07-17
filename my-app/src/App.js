import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./Navbar";
import GenerateNewCard from "./GenerateNewCard";
import CardInventory from "./CardInventory";
import LearnMore from "./LearnMore";
import Home from "./Home";

function App() {

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

