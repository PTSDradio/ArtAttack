
import React,{ useState, useEffect } from "react"


function CPUcard() {

    //fetch pulls API data for the CPU opponent, populates [id, title, culture, period, medium, artistName, artistBio, primaryImage, endDate, tier]
    //Logic compares tier to current card (find the state that the player card is stored in). 

// const [dataArr, setData] = useState([]);
// const [array, setArray] = useState([]);


// useEffect(() => {
//     fetchRandomData();
//   }
// , []);

// const fetchRandomData = () => {
//   let randomNumber = Math.floor(Math.random() * 80000);
//   fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNumber}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(randomNumber);
//       if (data.message !== "ObjectID not found") {
//         if (data.isPublicDomain === true && data.primaryImage.includes("http")) {
//           const newData = { id: data.objectID, ...data };
//           setArray((prevArray) => [...prevArray, newData]);
//           setData(newData);
          
//           console.log(dataArr.length);
          
//         }
//         else {
//           let trashData = []
//         }
//       }
//     });
// };

  return (
    <div className="container">
        <div className="card-container">
            <h1>Card name here</h1>
            <h2>Strength: </h2>
            <h2>Defense: </h2>
            <img src={null} alt={null}></img>
        </div>
    </div>
  );
}

export default CPUcard;

