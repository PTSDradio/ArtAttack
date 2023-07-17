
import React,{ useState, useEffect } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./Navbar";
import GenerateNewCard from "./GenerateNewCard";
import CardInventory from "./CardInventory";
import LearnMore from "./LearnMore";
import Home from "./Home";

function App() {

const [dataArr, setData] = useState([]);
const [array, setArray] = useState([]);


useEffect(() => {
  for (let i = 0; i < 10; i++) {
    fetchRandomData();
  }
}, []);

const fetchRandomData = () => {
  let randomNumber = Math.floor(Math.random() * 80000);
  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(randomNumber);
      if (data.message !== "ObjectID not found") {
        if (data.isPublicDomain === true && data.primaryImage.includes("http")) {
          // const newData = { id: data.objectID, ...data };
          setArray((prevArray) => [...prevArray, data]);
          setData(data);
          
          console.log(data);
          postData(data);
        }
      }
    });
};

const postData = (data) => {
  const dateCheck = data.objectEndDate
  let tier = 0
  switch(true) {
    case dateCheck >= 1900:  
      tier = 8
      break;
    case dateCheck >= 1800:
      tier = 7
      break;
    case dateCheck >= 1700:
      tier = 6
      break;
    case dateCheck >= 1600:
      tier = 5
      break;
    case dateCheck >= 1500:
      tier = 4
      break;
    case dateCheck >= 1000:
      tier = 3
      break;
    case dateCheck >= 0:
      tier = 2
      break;
    case dateCheck < 0:
      tier = 1
      break;

     default:
      tier = 9
    } 
  const postData = {
    id: data.objectID,
    primaryImage: data.primaryImage,
    title: data.title,
    artistDisplayName: data.artistDisplayName,
    artistDisplayBio: data.artistDisplayBio,
    objectEndDate: data.objectEndDate,
    culture: data.culture,
    medium: data.medium,
    period: data.period,
    tier: tier,
    // tier: data.objectEndDate > 1900? "A" : null,
    
    // tier: data.objectEndDate > 1800 ? "E" : null,
    // tier: data.objectEndDate > 1700 ? "D" : null,
    // tier: data.objectEndDate > 1600 ? "C" : null,
    // tier: data.objectEndDate > 100 ? "B" : null,
  };

  fetch("http://localhost:3000/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error:", error));
};


  // return (
  //   <div className="App">
  //     {array.map((item) => (
  //       <div key={item.id}>
  //         <img src={item.primaryImage} className="App-logo" alt="logo" />
  //         <h2>Name: {item.title}</h2>
  //         <h3>Artist: {item.artistDisplayName}</h3>
  //         <h3>Year: {item.objectEndDate}</h3>
  //       </div>
  //     ))}
  return (
    <div>
      
      {/* <NavBar />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/GenerateNewCard" element={<GenerateNewCard />}/>
        <Route exact path="/CardInventory" element={<CardInventory />}/>
        <Route exact path="/LearnMore" element={<LearnMore />}/>
        </Routes> */}
    

    </div>
  );
}

export default App;

