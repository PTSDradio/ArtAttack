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
                

function CardDisplay({ array }){
    console.log(array);
    return (
        <div className="card-container">
            <h2>{array.title}</h2>
            <h3>{array.tier} </h3>
            <img src={array.primaryImage} alt={array.title}></img>
        </div>
    )
}

export default CardDisplay;