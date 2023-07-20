// import React, { useState, useEffect } from "react";
// import CardDisplay from "./CardDisplay";

// function RandomCards() {
//   const [cardPack, setCardPack] = useState([]);

//   useEffect(() => {
//     generateRandomCards();
//   }, []);

//   const generateRandomCards = () => {
//     let generatedCards = [];
//     for (let i = 0; i < 3; i++) {
//       const randomIndex = Math.floor(Math.random() * data.length);
//       const randomObject = data[randomIndex];
//       if (randomObject && randomObject.id) {
//         generatedCards = [randomObject, ...generatedCards];
//       }
//     }
//     setCardPack(generatedCards);
//   };

//   const [data, setData] = useState([]);


 
// useEffect(() => {
//   fetchCardPack();
  
// }, []);

// const fetchCardPack = () => {

//   fetch(`http://localhost:3000/cards`)
//   .then(res => res.json())
//   .then(data => {

    
//     setData(data);



//   })
// } 

//   return (
//     <div>
//       <div>
//         {cardPack.map((data) => (
//           <CardDisplay data={data} key={data.id} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RandomCards;
