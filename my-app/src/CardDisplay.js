import React from "react";



//         <div className="Card">
//          <img src={data.primaryImage} />
//             <h2>{data.title}</h2>
//             <h2>{data.tier}</h2>
//             <h3>{data.artistDisplayName}</h3>
//             <h3>{data.artistDisplayBio}</h3>
//             <h3>{data.objectEndDate}</h3>
//             <h3>{data.culture}</h3>
//             <h3>{data.medium}</h3>
//             <h3>{data.period}</h3>
                

function CardDisplay({ card }){

    return (
        <div className="card-container">
            <h2>{card.title}</h2>
            <h3>Tier: {card.tier} </h3>
            <img src={card.primaryImage} alt={card.title}></img>
        </div>
    )
}

export default CardDisplay;