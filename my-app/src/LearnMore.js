import React, { useState, useEffect } from "react";
import CardDisplay from "./CardDisplay";
import LearnMoreDisplay from "./LearnMoreDisplay";

function LearnMore({learnArray, setLearnArray,}) {
  // const [userCards, setUserCards] = useState([]);
  const [infoView, setInfoView] = useState(true);
  useEffect(() => {
    // fetch("http://localhost:3000/players_cards")
    //   .then((res) => res.json())
    //   .then(setLearnArray);
  }, []);

 const onClick = () => {
    setInfoView(!infoView);
  };
  const cardMap = learnArray.map((card) => {

    return (
      <div key={card.id} className="flex-container">
        <div className="card-container" onClick={onClick}>
          <h2>{card.title}</h2>
          {infoView ? (<h3>Tier: {card.tier} </h3>) : (<h3>Price: {card.price} </h3>)}
          <img src={card.primaryImage} alt={card.title}></img>
          {infoView ? (<p>Artist: {card.artistDisplayName}</p>) :
          (<p>Period: {card.period}</p>)}
          {infoView ? (<p>Artist Bio: {card.artistDisplayBio} </p>) : (<p>Culture: {card.culture} </p>)}
          {infoView ? (<p>Date: {card.objectEndDate}</p>) : (<p>Medium: {card.medium} </p>)}
        </div>
      </div>
    );
  });

 
    // console.log(userCards)

  // const learnMoreCards = (
  //     userCards.map((card) => (
  //         <div>
  //             {cardMap}
  //             {/* <div className="display-container"> */}
  //                 {/* <CardDisplay card={card} key={card.id} onClick={onClick}/>  */}
  //             {/* </div> */}
  //                 {/* <div className="flex-container">
  //                     <LearnMoreDisplay card={card} key={card.id}/>
  //             </div> */}
  //          </div>
  //         )
  //     ))

  return (
    <div className="inventory-flex-container">
      {/* {learnMoreCards} */}
      {cardMap}
    </div>
  );
}

export default LearnMore;
