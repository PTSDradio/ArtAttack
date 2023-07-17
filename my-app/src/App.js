
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
          const newData = { id: data.objectID, ...data };
          setArray((prevArray) => [...prevArray, newData]);
          setData(newData);
          
          console.log(dataArr.length);
          
        }
        else {
          let trashData = []
        }
      }
    });
};

// const postData = (data) => {
//   const postData = {
//     id: data.id,
//     primaryImage: data.primaryImage,
//     title: data.title,
//     artistDisplayName: data.artistDisplayName,
//     objectEndDate: data.objectEndDate,
//   };

//   fetch("http://localhost:3000/cards", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(postData),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log("Error:", error));
// };


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
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/GenerateNewCard" element={<GenerateNewCard />}/>
          <Route exact path="/CardInventory" element={<CardInventory />}/>
          <Route exact path="/LearnMore" element={<LearnMore />}/>
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

