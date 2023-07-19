import React, {useState, useEffect}from "react";

function GenerateNewCard(){
  

        console.log("sup");
    // let card = () => {
    //     fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${Math.floor(Math.random() * 80000)}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // console.log(randomNumber);
    //         if (data.isPublicDomain === true && data.primaryImage.includes("http")&&data.message !== "ObjectID not found") {
    //             // use data
    //             // console.log(data);
    //             return (data)
    //         }
    //         else {
    //             card();
    //         }
          
    //     });    }

    // const funky = Promise.all([
    //     fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${Math.floor(Math.random() * 80000)}`),
    //     fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${Math.floor(Math.random() * 80000)}`),
    //     fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${Math.floor(Math.random() * 80000)}`)
    // ]).then(function(responses){
    //     return Promise.all(responses.map(function(response){
    //         return response.json();
    //     }));
    // }).then(function(data){

    //     console.log(data);
    // }).catch(function(error){
    //     console.log(error);
    // });

    return (
        <div className="flex-container">
            <h1> Generate New Card </h1>
        </div>
    )
}

export default GenerateNewCard; 