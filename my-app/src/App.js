import React, { useEffect, useState } from "react"

function App() {
  const [img, setImg] = useState("")
  const [artifact, setArtifact] = useState("")
  useEffect(()=>{
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/47120")
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        setArtifact(data)
        setImg(data.primaryImageSmall)
      })
  }, [])

  return (
    <div>
      <div className="topnav">
        <a href="#home"> Home </a>
        <a href="#battle"> Generate New Cards </a>
        <a href="#learn-more"> Learn More </a>
        <a href="#card-inventory"> Card Inventory </a>
      </div>
      <div className="card-container">
        <h1>Card name here</h1>
        <h2>Strength: </h2>
        <h2>Defense: </h2>
        <img src={img} alt={artifact.medium}></img>
      </div>
    </div>
  );
}

export default App;
